import axios from "axios";
import { Dispatch } from "react";
import { SwapiRequestAction } from "./actions";
import { SwapiRequestType } from "./actions";

export const makeSwapiRequest = (
  resource: string,
  page: number | undefined = undefined,
  schema: string | undefined = undefined
) => {
  return async (dispatch: Dispatch<SwapiRequestAction>) => {
    dispatch({ type: SwapiRequestType.SWAPI_REQUEST_LOADING });
    
    let requestUrl = `https://swapi.dev/api/${resource}`;

    requestUrl = schema
      ? requestUrl + `/${schema}`
      : requestUrl + `/?page=${page}`;

    try {
      await axios.get(requestUrl).then((result) => {
        console.log(result);
        
        dispatch({
          type: SwapiRequestType.SWAPI_REQUEST_SUCCESS,
          payload: result.data,
        });
      });
    } catch (error: any) {
      dispatch({
        type: SwapiRequestType.SWAPI_REQUEST_ERROR,
        payload: error.message,
      });
    }
  };
};
