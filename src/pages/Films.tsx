import { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";

const Films = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, error, data } = state;
  console.log(data.results);
  useEffect(() => {
    makeSwapiRequest(dispatch, "films");
  }, [dispatch]);
  return <h1>Films</h1>;
};

export default Films;
