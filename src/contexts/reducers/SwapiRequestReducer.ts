import { SwapiRequestActionType } from "../action-types";
import { SwapiRequestAction } from "../actions";

export interface SwapiRequestState {
  loading: boolean;
  error: string | null;
  data: {} | [] | string | null;
}

export const initialState = {
  loading: false,
  error: null,
  data: null,
};

const swapiRequestReducer = (
  state: SwapiRequestState = initialState,
  action: SwapiRequestAction
): SwapiRequestState => {
  switch (action.type) {
    case SwapiRequestActionType.SWAPI_REQUEST_LOADING:
      return { loading: true, error: null, data: [] };
    case SwapiRequestActionType.SWAPI_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SwapiRequestActionType.SWAPI_REQUEST_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default swapiRequestReducer;
