import React from "react";
import { Layout, Card, Typography } from "antd";

const { Content } = Layout;
const Error = () => {
  return (
    <Content>
      <Card>
        <Typography.Title>Unfortunately Error happened :( </Typography.Title>
      </Card>
    </Content>
  );
};

export default Error;
