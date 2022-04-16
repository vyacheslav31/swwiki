import { useReducer } from "react";
import SwapiRequestContext from "./context";
import { SwapiRequestReducer } from "./reducer";
import { swapiRequestInitialState } from "./state";

type SwapiRequestProviderProps = {
  children: React.ReactNode;
};

const SwapiRequestProvider = ({ children }: SwapiRequestProviderProps) => {
  const [state, dispatch] = useReducer(
    SwapiRequestReducer,
    swapiRequestInitialState
  );

  return (
    <SwapiRequestContext.Provider value={{ state, dispatch }}>
      {children}
    </SwapiRequestContext.Provider>
  );
};

export default SwapiRequestProvider;
