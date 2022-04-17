import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import SwapiResource from '../types/SwapiResource'

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
  const { data: resource, loading } = requestState;
  const[loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      const dispatchSwapiRequest = makeSwapiRequest(resourceType, undefined, params.id);
      dispatchSwapiRequest(requestDispatch);
    }
    if (resource) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <h1>{loaded && (resource as SwapiResource).name}</h1>
    </>
  );
};

export default SwapiResourceDetailsPage;
