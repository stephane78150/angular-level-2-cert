export type ResponseStatus = 'loading' | 'not yet loaded' | 'error';

export type LoadingStatus = ResponseStatus | 'loaded';

export type Response<T> = T | ResponseStatus;