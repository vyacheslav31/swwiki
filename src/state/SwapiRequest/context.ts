import { createContext, Dispatch } from "react";
import { SwapiRequestActionState, swapiRequestInitialState } from "./state";
import { SwapiRequestAction } from "./actions";

const SwapiRequestContext = createContext<{
  state: SwapiRequestActionState;
  dispatch: Dispatch<SwapiRequestAction>;
}>({
  state: swapiRequestInitialState,
  dispatch: () => null,
});

export default SwapiRequestContext;
