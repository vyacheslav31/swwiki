import { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import { PageHeader, Divider } from "antd";

const Planets = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { data } = state;

  useEffect(() => {
    makeSwapiRequest(dispatch, "planets");
  }, []);
  return (
    <>
      <PageHeader className="site-page-header" title="Planets" />
      <Divider />
    </>
  );
};

export default Planets;
