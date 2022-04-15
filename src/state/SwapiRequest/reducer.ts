import { SwapiRequestAction, SwapiRequestType } from "./actions";
import {
  swapiRequestInitialState,
  SwapiRequestActionState,
  emptySwapiResponse,
} from "./state";

export const SwapiRequestReducer = (
  state: SwapiRequestActionState = swapiRequestInitialState,
  action: SwapiRequestAction
): SwapiRequestActionState => {
  switch (action.type) {
    case SwapiRequestType.SWAPI_REQUEST_LOADING:
      return { loading: true, error: null, data: emptySwapiResponse };
    case SwapiRequestType.SWAPI_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SwapiRequestType.SWAPI_REQUEST_ERROR:
      return { loading: false, error: action.payload, data: emptySwapiResponse };
    default:
      return state;
  }
};
