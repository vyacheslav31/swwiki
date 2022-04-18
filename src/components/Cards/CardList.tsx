import React from "react";
import { Row } from "antd";
import SwapiResourceCard from "./SwapiResourceCard";
import SwapiResource from "../../types/SwapiResource";

interface CardListProps {
  data: [SwapiResource];
  resourceType: string;
  loading: boolean;
}

const CardList: React.FC<CardListProps> = (
  props: React.PropsWithChildren<CardListProps>
) => {
  
  const resourceCards = props.data.map((resource: SwapiResource) => {
    resource.name = resource.name || resource.title;
    const id = parseInt(resource.url.match(/\d+/)!.join(""));
    return (
      <SwapiResourceCard
        key={resource.name}
        id={id}
        name={resource.name}
        resourceType={props.resourceType}
      />
    );
  });
  return (
    <div className="site-card-wrapper" style={{padding: '1rem'}}>
      <Row gutter={20} justify="center">{resourceCards}</Row>
    </div>
  );
};

export default CardList;
