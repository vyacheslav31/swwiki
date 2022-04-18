import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SwapiRequestContext from "../state/SwapiRequest/context";
import { makeSwapiRequest } from "../state/SwapiRequest/action-creator";
import SwapiResource from '../types/SwapiResource'
import { Descriptions, Layout, PageHeader} from "antd";
import { Content } from "antd/lib/layout/layout";
import SwapiResourceImage from "../components/SwapiResourceImage";
import {Row, Col} from 'antd';
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
  const id = parseInt(params.id!);

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
      <Content style={{ padding: '0 24px'}}>
        <PageHeader title={resourceName}></PageHeader>
        <Row wrap={false}>
        <Col style={{overflow: "hidden"}} flex={2}>
          <SwapiResourceImage style={{maxWidth: "100%", maxHeight: "100%", display: "block"}} id={id} resourceType={resourceType} resourceName={resourceName}/>
        </Col>
          {loaded && 
          <Col flex={3}>
            <Descriptions bordered>
              {details}
            </Descriptions>
          </Col>
          }
        </Row>
      </Content>
    </Layout>
  );
};

export default SwapiResourceDetailsPage;
