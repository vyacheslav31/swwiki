import React from "react";
import { Row } from "antd";
import SwapiResourceCard from "./SwapiResourceCard";
import SwapiResource from "../../types/SwapiResource";

/**
 * CardList component
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {data: SwapiResource[]} The array of resources to display in the card list.
 * @param {resourceType: string} The type of SWApi resource.
 */

export interface CardListProps {
  data: SwapiResource[];
  resourceType: string;
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
        name={resource.name!}
        resourceType={props.resourceType}
      />
    );
  });
  return (
    <div className="site-card-wrapper" style={{ padding: "1rem" }}>
      <Row gutter={20} justify="center">
        {resourceCards}
      </Row>
    </div>
  );
};

export default CardList;
