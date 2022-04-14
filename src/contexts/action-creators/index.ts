import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "react";

export const makeSwapiRequest = (resource: string, schema: string = "") => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SWAPI_REQUEST_LOADING,
    });

    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/${resource}` + schema ? `/${schema}` : ""
      );

      dispatch({
        type: ActionType.SWAPI_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SWAPI_REQUEST_ERROR,
        payload: err.message,
      });
    }
  };
};
