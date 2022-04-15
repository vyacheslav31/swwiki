import React, { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import CardList from "../components/Cards/CardList";
import { PageHeader, Divider } from "antd";

const Characters: React.FC = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { data } = state;
  const characters = data.results;

  useEffect(() => {
    makeSwapiRequest(dispatch, "people");
  }, []);

  return (
    <>
      <PageHeader className="site-page-header" title="Characters" />
      <Divider />
      <CardList data={characters} />
    </>
  );
};

export default Characters;
