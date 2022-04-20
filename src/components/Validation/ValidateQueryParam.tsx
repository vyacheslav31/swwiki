import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import validatePageNumber from "../../helpers/validatePageNumber";
import SwapiResourcePage from "../../pages/SwapiResourcePage";

/**
 * ValidateQueryParam component
 * Used to validate if the queryParam route specified in the URL is valid.
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {resourceType: string} The type of SWApi resource.
 */

export interface ValidateQueryParamProps {
  resourceType: string;
}

const ValidateQueryParam: React.FC<ValidateQueryParamProps> = ({
  resourceType,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get("page");

  useEffect(() => {
    if (
      pageNumber == null ||
      !pageNumber.match(/\d+/) ||
      !validatePageNumber(resourceType, parseInt(pageNumber))
    ) {
      setSearchParams({ page: "1" });
    }
  }, []);
  return <SwapiResourcePage resourceType={resourceType} />;
};

export default ValidateQueryParam;
