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
import { SwapiResponse } from "../state/SwapiRequest/actions";

/**
 * This is this page where the user can see a list of cards and select a particular Swapi
 * Resource to read. User is also able to navigate to other pages via the Pagination component.
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {resourceType: string} The Swapi resource type
 * @returns SwapiResourcePage
 */

export interface SwapiResourcePageProps {
  resourceType: string;
}

const SwapiResourcePage: React.FC<SwapiResourcePageProps> = ({
  resourceType,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { loading, data } = state;
  const [itemCount, setItemCount] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const { count, results: resources } = data as SwapiResponse;
  const currentPage = parseInt(searchParams.get("page")!);
  const location = useLocation().pathname;
  const pageOnChangeHandler = (newPageNumber: number) => {
    setSearchParams({ page: newPageNumber.toString() });
  };

  useEffect(() => {
    if (loaded && count > 0) {
      setItemCount(count);
    }
  }, [data]);

  useEffect(() => {
    if (
      !loading &&
      currentPage &&
      validatePageNumber(resourceType, currentPage)
    ) {
      const dispatchSwapiRequest = makeSwapiRequest(resourceType, currentPage);
      dispatchSwapiRequest(dispatch);
    }
    setLoaded(true);
  }, [location, searchParams]);

  return (
    <>
      <Title level={4} style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
        &gt; {ucfirst(resourceType)}
      </Title>
      <Text>
        Please click on the resource portraits below to view more information
        about them.
      </Text>
      <Divider />
      <Pagination
        data-testid={resourceType + "-pagination"}
        onChange={pageOnChangeHandler}
        current={currentPage}
        total={itemCount}
        showSizeChanger={false}
        style={{ padding: "20px" }}
      />
      {!loading && loaded && (
        <>
          <CardList data={resources} resourceType={resourceType} />
        </>
      )}
    </>
  );
};

export default SwapiResourcePage;
