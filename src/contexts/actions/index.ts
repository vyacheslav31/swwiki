import { ActionType } from '../action-types';

interface SwapiRequestAction {
    type: ActionType.SWAPI_REQUEST_LOADING;
}
interface SwapiRequestSuccessAction {
    type: ActionType.SWAPI_REQUEST_SUCCESS;
    payload: string[];
}
interface SwapiRequestErrorAction {
    type: ActionType.SWAPI_REQUEST_ERROR;
    payload: string;
}

export type Action =
    | SwapiRequestAction
    | SwapiRequestSuccessAction
    | SwapiRequestErrorAction;
