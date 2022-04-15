import { Outlet, Link } from "react-router-dom";
import { Menu } from "antd";

const Layout = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="characters">
          <Link to="/characters">Characters</Link>
        </Menu.Item>
        <Menu.Item key="films">
          <Link to="/films">Films</Link>
        </Menu.Item>
        <Menu.Item key="planets">
          <Link to="/planets">Planets</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Layout;
