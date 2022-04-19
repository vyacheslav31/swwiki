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
        <PageHeader title={resource.name}></PageHeader>
        <Row wrap={false}>
          <Col style={{ overflow: "hidden" }} flex={2}>
            <SwapiResourceImage
              style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
              id={id}
              resourceType={resourceType}
              resourceName={resource.name!}
            />
          </Col>
          {loaded && (
            <Col flex={3}>
              <SwapiResourceDetails
                resource={resource}
                resourceType={resourceType}
              />
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
};

export default SwapiResourceDetailsPage;
