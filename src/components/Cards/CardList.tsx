import React from "react";
import { Row, Card } from "antd";
import { Character } from "../../types/character";

import CharacterCard from "./CharacterCard";

interface CardListProps {
  data: [];
}

const CardList: React.FC<CardListProps> = (
  props: React.PropsWithChildren<CardListProps>
) => {
  let id = 0;
  const characterCards = props.data.map((character: Character) => {
    id += 1;
    return <CharacterCard characterName={character.name} id={id} colSpan={8} />;
  });
  return (
    <Card>
      <Row gutter={16}>{characterCards}</Row>
    </Card>
  );
};

export default CardList;
