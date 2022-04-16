import { Outlet, Link } from "react-router-dom";
import { Menu } from "antd";
;

const Layout = () => {

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="characters">
          <Link to="/characters?page=1">Characters</Link>
        </Menu.Item>
        <Menu.Item key="films?page=1">
          <Link to="/films?page=1">Films</Link>
        </Menu.Item>
        <Menu.Item key="planets">
          <Link to="/planets?page=1">Planets</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Layout;
