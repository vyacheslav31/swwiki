import { useReducer } from "react";
import { SwapiRequestContext } from "./context";
import { SwapiRequestReducer } from "./reducer";
import { swapiRequestInitialState } from "./state";

type SwapiRequestProviderProps = {
  children: React.ReactNode;
};

export const SwapiRequestProvider = ({
  children,
}: SwapiRequestProviderProps) => {
  const [state, dispatch] = useReducer(
    SwapiRequestReducer,
    swapiRequestInitialState
  );

  console.log(state);
  return (
    <SwapiRequestContext.Provider value={{ state, dispatch }}>
      {children}
    </SwapiRequestContext.Provider>
  );
};
