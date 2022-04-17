import React, { useContext, useEffect, useState } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import CardList from "../components/Cards/CardList";
import { PageHeader, Divider } from "antd";
import { Pagination } from "antd";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

interface SwapiResourcePageProps {
  resourceType: string;
}

const SwapiResourcePage: React.FC<SwapiResourcePageProps> = ({
  resourceType,
}) => {
  const { state: requestState, dispatch: requestDispatch } = useContext(
    SwapiRequestContext
  );
  const { loading, data } = requestState;
  const resources = data.results;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = parseInt(searchParams.get('page')!)
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  const pageOnChangeHandler = (newPageNumber: number) => {
    setSearchParams({"page" : newPageNumber.toString()});
  };

  useEffect(() => {
    if (!loading) {
      const dispatchSwapiRequest = makeSwapiRequest(resourceType, pageNumber);
      dispatchSwapiRequest(requestDispatch);
    }
    if (data.results) {
      setLoaded(true);
    }
  }, [location, searchParams]);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
      />
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
