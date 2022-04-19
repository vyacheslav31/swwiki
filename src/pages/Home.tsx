import { Divider, Row, Col, Card} from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import ResourceTypes from "../types/ResourceTypes";

const Home = () => {
  let resourceTypeCards: JSX.Element[] = [];
  for (const [k, v] of Object.entries(ResourceTypes)) {
    resourceTypeCards.push(
      <Col>
          <Link to={`/${k}?page=1`}><Card hoverable>{v.toUpperCase()}</Card></Link>
      </Col>
    )
  }
  return (
    <>
      <Title level={4} style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
        &gt; Home
      </Title>
      <Divider />
      <Row gutter={20} justify="center" style={{ marginTop: 200}}>
        {resourceTypeCards}
      </Row>
    </>
  );
};

export default Home;
