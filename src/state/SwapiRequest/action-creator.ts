import axios from "axios";
import { Dispatch } from "react";
import { SwapiRequestAction } from "./actions";
import { SwapiRequestType } from "./actions";

export const makeSwapiRequest = async (
  dispatch: Dispatch<SwapiRequestAction>,
  resource: string,
  page: number | undefined = undefined,
  schema: string | undefined = undefined
) => {
  dispatch({ type: SwapiRequestType.SWAPI_REQUEST_LOADING });

  let requestUrl = `https://swapi.dev/api/${resource}`;

  requestUrl = schema
    ? requestUrl + `/${schema}`
    : requestUrl + `/?page=${page}`;

  try {
    const { data } = await axios.get(requestUrl);
    dispatch({
      type: SwapiRequestType.SWAPI_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: SwapiRequestType.SWAPI_REQUEST_ERROR,
      payload: error.message,
    });
  }
};
