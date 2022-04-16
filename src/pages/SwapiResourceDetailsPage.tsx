import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import { useLocation } from "react-router";

// import SwapiResource from '../types/SwapiResource';

interface SwapiResourceDetailsPageProps {
  resourceType: string;
}

const SwapiResourceDetailsPage: React.FC<SwapiResourceDetailsPageProps> = ({
  resourceType,
}) => {
  const params = useParams();
  const { state: requestState, dispatch: requestDispatch } = useContext(
    SwapiRequestContext
  );
  const { data: resource } = requestState;

  // useEffect(() => {
  //     makeSwapiRequest(requestDispatch, resourceType, undefined, params.id);
  // }, []);

  return (
    <>
      <h1>{resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}</h1>
    </>
  );
};

export default SwapiResourceDetailsPage;
