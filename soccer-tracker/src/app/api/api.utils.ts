import { Observable, catchError, delay, filter, map, of, startWith } from "rxjs";
import type {ResponseOrStatus, ResponseStatus, LoadingStatus} from '../shared/api-status.model';

export const NOT_YET_LOADED = of('not yet loaded' as const);


function hasReceivedData<T>(resp: ResponseOrStatus<T>): resp is T {
    return resp !== 'loading' && resp !== 'not yet loaded' && resp !== 'error';
}

function hasNotReceivedData<T>(resp: ResponseOrStatus<T>): resp is ResponseStatus {
    return !hasReceivedData(resp);
}

export function toLoadingStatus<T>(response$: Observable<ResponseOrStatus<T>>): Observable<LoadingStatus> {
    return response$.pipe(map(resp => hasNotReceivedData(resp) ? resp : 'loaded' as const));
}

export function toResultData<T>(response$: Observable<ResponseOrStatus<T>>): Observable<T> {
    return response$.pipe(filter(hasReceivedData));
}

export function withLoadingAndErrorStatus<T>(response$: Observable<T>): Observable<ResponseOrStatus<T>> {
    return response$.pipe(
        catchError( _ => of('error' as const)),
        delay(1500), // to test loading bar 
        startWith('loading' as const)
    );
}