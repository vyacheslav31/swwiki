import { Outlet, Link } from "react-router-dom";
import { Menu } from "antd";

const Layout = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/characters">Characters</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/films">Films</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/planets">Planets</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Layout;
