import { useContext, useEffect } from "react";
import { SwapiRequestContext } from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import { PageHeader, Divider } from "antd";

const Films = () => {
  const { state, dispatch } = useContext(SwapiRequestContext);
  const { data } = state;

  useEffect(() => {
    makeSwapiRequest(dispatch, "films");
  }, []);

  return (
    <>
      <PageHeader className="site-page-header" title="Films" />
      <Divider />
    </>
  );
};

export default Films;
