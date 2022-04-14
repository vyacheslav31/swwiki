import { SwapiRequestActionType } from "../action-types";

interface SwapiRequestLoadingAction {
  type: SwapiRequestActionType.SWAPI_REQUEST_LOADING;
}
interface SwapiRequestSuccessAction {
  type: SwapiRequestActionType.SWAPI_REQUEST_SUCCESS;
  payload: string[];
}
interface SwapiRequestErrorAction {
  type: SwapiRequestActionType.SWAPI_REQUEST_ERROR;
  payload: string;
}

export type SwapiRequestAction =
  | SwapiRequestLoadingAction
  | SwapiRequestSuccessAction
  | SwapiRequestErrorAction;
