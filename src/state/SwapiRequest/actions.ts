export enum SwapiRequestType {
  SWAPI_REQUEST_LOADING = "swapi_request_loading",
  SWAPI_REQUEST_SUCCESS = "swapi_request_success",
  SWAPI_REQUEST_ERROR = "swapi_request_error",
}

export type SwapiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: [] | any;
};

export interface SwapiRequestLoadingAction {
  type: SwapiRequestType.SWAPI_REQUEST_LOADING;
}
export interface SwapiRequestSuccessAction {
  type: SwapiRequestType.SWAPI_REQUEST_SUCCESS;
  payload: SwapiResponse;
}
export interface SwapiRequestErrorAction {
  type: SwapiRequestType.SWAPI_REQUEST_ERROR;
  payload: string;
}

export type SwapiRequestAction =
  | SwapiRequestLoadingAction
  | SwapiRequestSuccessAction
  | SwapiRequestErrorAction;
