import React, { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import CardList from "../components/Cards/CardList";
import { PageHeader, Divider } from "antd";

interface SwapiResourcePageProps {
  resourceType: string;
}

const SwapiResourcePage: React.FC<SwapiResourcePageProps> = ({
  resourceType,
}) => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { data } = state;
  const resources = data.results;

  useEffect(() => {
    makeSwapiRequest(dispatch, resourceType);
  }, [dispatch, resourceType]);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
      />
      <Divider />
      <CardList data={resources} resourceType={resourceType} />
    </>
  );
};

export default SwapiResourcePage;
