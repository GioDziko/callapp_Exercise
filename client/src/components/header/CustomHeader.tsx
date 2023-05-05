/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Layout } from "antd";
const { Header } = Layout;

import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
import styles from "./header.module.css";

const CustomHeader = () => {
  const navigate = useNavigate();
  return (
    <Header className={styles.header}>
      <div
        onClick={() => {
          navigate(ROUTES.HOME_PAGE);
        }}
        className={styles.logo}
      >
        Users app
      </div>
    </Header>
  );
};

export default CustomHeader;
