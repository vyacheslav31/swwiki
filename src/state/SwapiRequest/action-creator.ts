import axios from "axios";
import { Dispatch } from "react";
import { SwapiRequestAction } from "./actions";
import { SwapiRequestType } from "./actions";

/**
 * This is the main app component where all the routes are declared.
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {resource: string} The resource to query (i.e: People, Films, Planets, etc...)
 * @param {page?: string} The page number of query (1, 2, 3, etc...)
 * @param {schema?: string} The schema to query (e.g: https://swapi.dev/api/people/{schema})
 * @returns A function to make swapi requests by providing a Dispatch.
 */
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
