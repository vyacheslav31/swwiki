import axios from "axios";
import { SwapiRequestActionType } from "../action-types";
import { SwapiRequestAction } from "../actions";
import { Dispatch } from "react";

export const makeSwapiRequest = (resource: string, schema: string = "") => {
  return async (dispatch: Dispatch<SwapiRequestAction>) => {
    dispatch({
      type: SwapiRequestActionType.SWAPI_REQUEST_LOADING,
    });

    try {
      const { data } = await axios.get(
        `https://swapi.dev/api/${resource}` + schema ? `/${schema}` : ""
      );

      dispatch({
        type: SwapiRequestActionType.SWAPI_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: SwapiRequestActionType.SWAPI_REQUEST_ERROR,
        payload: err.message,
      });
    }
  };
};
