import React, { useContext, useEffect, useState } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import CardList from "../components/Cards/CardList";
import { PageHeader, Divider } from "antd";
import { Pagination } from 'antd'
import { useLocation } from "react-router";

interface SwapiResourcePageProps {
  resourceType: string;
}

const SwapiResourcePage: React.FC<SwapiResourcePageProps> = ({
  resourceType,
}) => {
  const { state: requestState, dispatch: requestDispatch } = useContext(SwapiRequestContext);
  const { loading, data } = requestState;
  const resources = data.results;
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();

  const pageOnChangeHandler = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
    setPageNumber(1)
  }, [location]);

  useEffect(() => {
    makeSwapiRequest(requestDispatch, resourceType, pageNumber);
  }, [requestDispatch, resourceType, pageNumber]);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
      />
      <Divider />
      <Pagination onChange={pageOnChangeHandler} current={pageNumber} total={data.count} showSizeChanger={false} style={{ padding: "20px" }} />
      <CardList loading={loading} data={resources} resourceType={resourceType} />
    </>
  );
};

export default SwapiResourcePage;
