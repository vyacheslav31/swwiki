import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import SwapiResource from "../types/SwapiResource";
import { Layout, PageHeader } from "antd";
import { Content } from "antd/lib/layout/layout";
import SwapiResourceImage from "../components/Image/SwapiResourceImage";
import { Row, Col } from "antd";
import SwapiResourceDetails from "../components/Details/ResourceDetailsDisplay";

interface SwapiResourceDetailsPageProps {
  resourceType: string;
}

const SwapiResourceDetailsPage: React.FC<SwapiResourceDetailsPageProps> = ({
  resourceType,
}) => {
  const params = useParams();
  const { state: requestState, dispatch: requestDispatch } =
    useContext(SwapiRequestContext);
  const { data, loading } = requestState;
  const resource = data as SwapiResource;
  const [loaded, setLoaded] = useState(false);
  const id = parseInt(params.id!);

  useEffect(() => {
    if (!loading) {
      const dispatchSwapiRequest = makeSwapiRequest(
        resourceType,
        undefined,
        params.id
      );
      dispatchSwapiRequest(requestDispatch);
    }
    setLoaded(true);
  }, []);

  return (
    <Layout
      className="site-layout-background"
      style={{ padding: "24px 0", background: "#fff", marginTop: "3rem" }}
    >
      <Content style={{ padding: "0 24px" }}>
        <PageHeader title={resource.name || resource.title}></PageHeader>
            { loaded && (<div style={{display: "flex", flexBasis: "auto", maxWidth: 900, justifyContent: "center", margin: "auto"}}>
              <SwapiResourceImage
                style={{ objectFit: "cover", flex: 1}}
                id={id}
                resourceType={resourceType}
                resourceName={resource.name!}
              />
                <SwapiResourceDetails
                  resource={resource}
                  resourceType={resourceType}
                />
            </div>)}
      </Content>
    </Layout>
  );
};

export default SwapiResourceDetailsPage;
