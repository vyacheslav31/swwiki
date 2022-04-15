import React, { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import { resourceLimits } from "worker_threads";
const Characters = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, error, data } = state;

  console.log(data.results);

  useEffect(() => {
    makeSwapiRequest(dispatch, "people");
  }, [dispatch]);

  return (
    <div>
      <h1>Characters</h1>
      {loading && "Now loading characters..."}
      {error && "Error fetching characters ..."}
      {/* {data} */}
    </div>
  );
};

export default Characters;
