import React from "react";
import { HomeFilled, PieChartFilled } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
const { Sider } = Layout;
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Sider breakpoint="xs" theme="light">
      <Menu
        items={[
          {
            label: "Home",
            key: "home",
            icon: <HomeFilled />,
            onClick: () => {
              navigate(ROUTES.HOME_PAGE);
            },
          },
          {
            label: "Charts",
            key: "charts",
            icon: <PieChartFilled />,
            onClick: () => {
              navigate(ROUTES.CHARTS_PAGE);
            },
          },
        ]}
      />
    </Sider>
  );
};

export default Navigation;
