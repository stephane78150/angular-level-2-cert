import { Observable, catchError, filter, map, of } from "rxjs";

export type ApiResponseStatus = 'loading' | 'not yet loaded' | 'error';

export type ApiLoadingStatus = ApiResponseStatus | 'loaded';

export type ApiResponse<T> = T | ApiResponseStatus;

export const NOT_YET_LOADED = of('not yet loaded' as const);


function hasReceivedData<T>(resp: ApiResponse<T>): resp is T {
    return resp !== 'loading' && resp !== 'not yet loaded' && resp !== 'error';
}

function hasNotReceivedData<T>(resp: ApiResponse<T>): resp is ApiResponseStatus {
    return !hasReceivedData(resp);
}

export function toLoadingStatus<T>(response$: Observable<ApiResponse<T>>): Observable<ApiLoadingStatus> {
    return response$.pipe(map(resp => hasNotReceivedData(resp) ? resp : 'loaded' as const));
}

export function toResultData<T>(response$: Observable<ApiResponse<T>>): Observable<T> {
    return response$.pipe(filter(hasReceivedData));
}