import React from "react";
import { Outlet } from "react-router-dom";
import style from "./index.module.less";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { microApps } from "@/micro-app";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = microApps.map((item) => {
  return {
    key: item.activeRule,
    label: item.name,
  };
});

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <div className={style.layout}>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["key"]}
        mode="inline"
        items={items}
      />
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
