import { Divider } from "antd";
import Title from "antd/lib/typography/Title";

const Home = () => {
  return (
    <>
      <Title level={4} style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
        &gt; Home
      </Title>
      <Divider />
    </>
  );
};

export default Home;
