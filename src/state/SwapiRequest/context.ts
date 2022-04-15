import { createContext, Dispatch } from "react";
import { SwapiRequestActionState, swapiRequestInitialState } from "./state";
import { SwapiRequestAction } from "./actions";

export const SwapiRequestContext = createContext<{
  state: SwapiRequestActionState;
  dispatch: Dispatch<SwapiRequestAction>;
}>({
  state: swapiRequestInitialState,
  dispatch: () => null,
});
