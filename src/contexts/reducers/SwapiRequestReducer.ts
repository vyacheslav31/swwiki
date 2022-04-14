import { ActionType } from '../action-types';
import { Action } from '../actions';

interface SwapiRequestState {
    loading: boolean;
    error: string | null;
    data: {} | [] | string | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null
};

export default const reducer = (state: SwapiRequestState = initialState, action: Action): SwapiRequestState => {
    switch (action.type) {
        case ActionType.SWAPI_REQUEST_LOADING:
            return { loading: true, error: null, data: [] };
        case ActionType.SWAPI_REQUEST_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SWAPI_REQUEST_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};