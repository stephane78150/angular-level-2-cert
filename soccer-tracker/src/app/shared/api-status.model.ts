export type ResponseStatus = 'loading' | 'not yet loaded' | 'error';

export type LoadingStatus = ResponseStatus | 'loaded';

export type ResponseOrStatus<T> = T | ResponseStatus;