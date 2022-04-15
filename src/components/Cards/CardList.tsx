import React from "react";
import { Row, Card } from "antd";
import SwapiResourceCard from "./SwapiResourceCard";
import { SwapiResource } from '../../types';


interface CardListProps {
  data: [];
  resourceType: string;
}

const CardList: React.FC<CardListProps> = (
  props: React.PropsWithChildren<CardListProps>
) => {
  let id = 0;
  const resourceCards = props.data.map((resource: SwapiResource) => {
    id += 1;
    return <SwapiResourceCard id={id} name={resource.title || resource.name} resourceType={props.resourceType} colSpan={8} />;
  });
  return (
    <Card>
      <Row gutter={16}>{resourceCards}</Row>
    </Card>
  );
};

export default CardList;
