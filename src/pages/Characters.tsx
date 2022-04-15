import React, { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import { Card } from "antd";
import { Character } from "../types/character";

const Characters = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, error, data } = state;

  useEffect(() => {
    makeSwapiRequest(dispatch, "people");
  }, []);

  const cardList: JSX.Element | JSX.Element[] = data.results.map(
    (character: Character) => {
      const name = character.name;
      return <Card key={1} title={name} />;
    }
  );

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
