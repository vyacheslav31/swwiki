import React from "react";
import { Col, Card } from "antd";

interface CharacterCardProps {
  id: number;
  characterName: string;
  colSpan: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  characterName,
  colSpan,
  id,
}) => {
  const { Meta } = Card;
  return (
    <>
      <Col span={colSpan}>
        <Card
          style={{ width: 200, alignContent: "center", margin: "4px" }}
          cover={
            <img
              alt={`An portrait of ${characterName}`}
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            />
          }
          key={characterName}
        >
          <Meta title={characterName} />
        </Card>
      </Col>
    </>
  );
};

export default CharacterCard;
