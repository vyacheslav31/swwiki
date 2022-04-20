import { Outlet, Link } from "react-router-dom";
import { Layout as Body, Menu } from "antd";
import { Header, Footer, Content } from "antd/lib/layout/layout";
import {
  UserOutlined,
  HomeOutlined,
  CameraOutlined,
  CloudFilled,
} from "@ant-design/icons";

const Layout = () => {
  return (
    <Body style={{ minHeight: "100vh", overflow: "auto" }}>
      <Header data-testid="body-header" className="header">
        <Menu data-testid="body-menu" mode="horizontal" theme="dark">
          <Menu.Item
            data-testid="home-menuitem"
            key="home"
            icon={<HomeOutlined />}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            data-testid="people-menuitem"
            key="people"
            icon={<UserOutlined />}
          >
            <Link to="/people?page=1">People</Link>
          </Menu.Item>
          <Menu.Item
            data-testid="films-menuitem"
            key="films"
            icon={<CameraOutlined />}
          >
            <Link to="/films?page=1">Films</Link>
          </Menu.Item>
          <Menu.Item
            data-testid="planets-menuitem"
            key="planets"
            icon={<CloudFilled />}
          >
            <Link to="/planets?page=1">Planets</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        data-testid="body-content"
        className="site-layout-background"
        style={{ padding: "0 60px" }}
      >
        <Outlet />
      </Content>
      <Footer data-testid="body-footer" style={{ textAlign: "center" }}>
        Copyright &copy; {new Date().getFullYear()} Vyacheslav Gorbov. All
        rights reserved.
      </Footer>
    </Body>
  );
};

export default Layout;
