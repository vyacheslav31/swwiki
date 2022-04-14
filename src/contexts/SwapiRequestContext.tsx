import React, { createContext, useReducer } from "react";
import swapiRequestReducer, {
  initialState,
  SwapiRequestState,
} from "./reducers/SwapiRequestReducer";
import { SwapiRequestAction } from "./actions";
import { Dispatch } from "react";

type SwapiContextProviderProps = {
  children: React.ReactNode;
};

export const SwapiRequestContext = createContext<{
  state: SwapiRequestState;
  dispatch: Dispatch<SwapiRequestAction>;
}>({ state: initialState, dispatch: () => null });

export const SwapiRequestProvider = ({
  children,
}: SwapiContextProviderProps) => {
  const [state, dispatch] = useReducer(swapiRequestReducer, initialState);

  return (
    <SwapiRequestContext.Provider value={{ state, dispatch }}>
      {children}
    </SwapiRequestContext.Provider>
  );
};
