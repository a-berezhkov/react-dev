import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Главная</Link>{" "}
        </li>
        <li>
          <Link to={"/posts"}>Посты</Link>{" "}
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;
