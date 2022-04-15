import React from "react";
import { Col, Card } from "antd";

interface SwapiResourceCardProps {
  id: number;
  name: string;
  resourceType: string;
  colSpan: number;
}

const SwapiResourceCard: React.FC<SwapiResourceCardProps> = ({
  id,
  name,
  resourceType,
  colSpan,
}) => {
  const { Meta } = Card;
  const imgFallback =
    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";

  return (
    <>
      <Col span={colSpan}>
        <Card
          style={{ width: 200, alignContent: "center", margin: "4px" }}
          cover={
            <img
              alt={`An portrait of ${name}`}
              src={`https://starwars-visualguide.com/assets/img/${resourceType}/${id}.jpg`}
              onError={({ currentTarget }) => (
                (currentTarget.onerror = null),
                (currentTarget.src = imgFallback)
              )}
            />
          }
          key={name}
        >
          <Meta title={name} />
        </Card>
      </Col>
    </>
  );
};

export default SwapiResourceCard;