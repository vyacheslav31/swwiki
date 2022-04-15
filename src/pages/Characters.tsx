import React, { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import { Card } from "antd";
import { Character } from "../types/character";

const Characters: React.FC = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, error, data } = state;

  useEffect(() => {
    makeSwapiRequest(dispatch, "people");
  }, []);

  return (
    <React.Fragment>
      <h1>Characters</h1>
      {loading && "Now loading characters..."}
      {error && "Error fetching characters ..."}
      {cardList}
    </React.Fragment>
  );
};

export default Characters;
