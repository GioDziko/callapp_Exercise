import React from "react";
import { Pie } from "@ant-design/plots";
import { useUserStore } from "../../store/userStore";
import { chartConfig } from "./utils/chartConfig";
import styles from "./chars.module.css";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routes";
const Charts = () => {
  const users = useUserStore((store) => store.users);
  const error = useUserStore((store) => store.error);
  const navigate = useNavigate();
  if (error) {
    navigate(ROUTES.NOT_FOUND);
  }

  return (
    <div className={styles.chart__wrapper}>
      <Pie {...chartConfig(users)} />
    </div>
  );
};

export default Charts;
