import { createContext } from "react";

const RouterContext = createContext<{ to: string; from: string }>({
  to: "",
  from: "",
});

export default RouterContext;
