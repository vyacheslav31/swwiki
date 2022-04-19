import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RouterContext from "./context";

type RouterProviderProps = {
  children: React.ReactNode;
};

const RouterProvider = ({ children }: RouterProviderProps) => {
  const location = useLocation();
  const [route, setRoute] = useState({
    //--> it can be replaced with useRef or localStorage
    to: location.pathname,
    from: location.pathname,
  });

  useEffect(() => {
    setRoute((prev) => ({ to: location.pathname, from: prev.to }));
  }, [location]);

  return (
    <RouterContext.Provider value={route}>{children}</RouterContext.Provider>
  );
};

export default RouterProvider;
