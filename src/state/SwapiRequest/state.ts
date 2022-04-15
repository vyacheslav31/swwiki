import { SwapiResponse } from "./actions";

export interface SwapiRequestActionState {
  loading: boolean;
  error: string | null;
  data: SwapiResponse;
}

export const emptySwapiResponse: SwapiResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

export const swapiRequestInitialState: SwapiRequestActionState = {
  loading: false,
  error: null,
  data: emptySwapiResponse,
};
