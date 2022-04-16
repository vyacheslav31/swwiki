import React from "react";
import { Col, Card } from "antd";
import mapResourcesToImages from "../../helpers/mapResourcesToImages";
import { Link } from "react-router-dom";

export interface SwapiResourceCardProps {
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
  resourceType = mapResourcesToImages(resourceType);

  return (
    <>
      <Col span={colSpan}>
        <Link to={`/${resourceType}/${id}`}>
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
        </Link>
      </Col>
    </>
  );
};

export default SwapiResourceCard;
