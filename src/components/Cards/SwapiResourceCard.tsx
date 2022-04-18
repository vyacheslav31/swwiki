import React from "react";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import SwapiResourceImage from "../SwapiResourceImage";


export interface SwapiResourceCardProps {
  id: number;
  name: string;
  resourceType: string;
}

const SwapiResourceCard: React.FC<SwapiResourceCardProps> = ({
  id,
  name,
  resourceType
}) => {
  const { Meta } = Card;
  return (
    <>
      <Col className="gutter-row" span={4}>
        <Link to={`/${resourceType}/${id}`}>
          <Card
            type="inner"
            hoverable
            style={{ alignContent: "center", marginTop: "12px" }}
            cover={
              <SwapiResourceImage id={id} resourceName={name} resourceType={resourceType} />
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
