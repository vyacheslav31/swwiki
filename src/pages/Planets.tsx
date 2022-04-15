import { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";

const Planets = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, error, data } = state;
  console.log(data.results);
  useEffect(() => {
    makeSwapiRequest(dispatch, "planets");
  }, [dispatch]);
  return <h1>Planets</h1>;
};

export default Planets;
