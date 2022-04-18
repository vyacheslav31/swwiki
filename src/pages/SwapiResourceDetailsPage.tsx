import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import SwapiResource from '../types/SwapiResource'
import { Descriptions, Layout, PageHeader, Avatar } from "antd";
import { Content } from "antd/lib/layout/layout";
import SwapiResourceImage from "../components/SwapiResourceImage";

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
  const { data, loading } = requestState
  const [loaded, setLoaded] = useState(false);
  const details: JSX.Element[] = []
  const resourceName = (data as SwapiResource).name || (data as SwapiResource).title;

  useEffect(() => {
    if (!loading) {
      const dispatchSwapiRequest = makeSwapiRequest(resourceType, undefined, params.id);
      dispatchSwapiRequest(requestDispatch);
    }
    setLoaded(true);
  }, []);

  for (const [key, value] of Object.entries(data as SwapiResource)) {
    details.push(<Descriptions.Item key={key} label={key}>{value}</Descriptions.Item>)
  }

  return (
    <Layout className="site-layout-background" style={{ padding: '24px 0', background: '#fff', marginTop: '3rem' }}>
      <Content style={{ padding: '0 24px', minHeight: 680 }}>
        <PageHeader title={resourceName}></PageHeader>
        <Layout style={{ backgroundColor: "#fff" }}>
          {loaded && <Descriptions bordered>
            <Descriptions.Item key={"Portrait"} label={"Portrait"}>
              <SwapiResourceImage id={parseInt(params.id!)} resourceName={resourceName} resourceType={resourceType} style={{ borderRadius: "50%", height: 200, width: 200, objectFit: "cover" }} />
            </Descriptions.Item>
            {details}
          </Descriptions>}
        </Layout>
      </Content>
    </Layout>
  );
};

export default SwapiResourceDetailsPage;
