import React, { useContext, useEffect, useState } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import CardList from "../components/Cards/CardList";
import Title from "antd/lib/typography/Title";
import { Divider, Pagination } from "antd";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import ucfirst from "../helpers/ucfirst";
import validatePageNumber from "../helpers/validatePageNumber";
import Text from "antd/lib/typography/Text";

interface SwapiResourcePageProps {
  resourceType: string;
}

const SwapiResourcePage: React.FC<SwapiResourcePageProps> = ({
  resourceType,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, data } = state;
  const resources = data.results;
  const pageNumber = parseInt(searchParams.get('page')!);
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const pageOnChangeHandler = (newPageNumber: number) => {
    setSearchParams({ "page": newPageNumber.toString() });
  };

  useEffect(() => {
    if (!loading && pageNumber && validatePageNumber(resourceType, pageNumber)) {
      const dispatchSwapiRequest = makeSwapiRequest(resourceType, pageNumber);
      dispatchSwapiRequest(dispatch);
    }
    setLoaded(true);
  }, [location, searchParams]);

  return (
    <>
      <Title level={4} style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>&gt; {ucfirst(resourceType)}</Title>
      <Text>Please click on the resource portraits below to view more information about them.</Text>
      <Divider />
      <Pagination
        onChange={pageOnChangeHandler}
        current={pageNumber}
        total={data.count}
        showSizeChanger={false}
        style={{ padding: "20px" }}
      />
      {loaded && (
        <CardList
          loading={loading}
          data={resources}
          resourceType={resourceType}
        />
      )}
    </>
  );
};

export default SwapiResourcePage;
