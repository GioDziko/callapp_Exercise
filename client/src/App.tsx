import React, { useEffect } from "react";
import AppRoutes from "./Routes";
import { useUserStore } from "./store/userStore";
import { Layout } from "antd";
import Navigation from "./components/navigation/Navigation";
import CustomHeader from "./components/header/CustomHeader";
import CustomFooter from "./components/footer/CustomFooter";

function App() {
  const getAllUsers = useUserStore((store) => store.getAllUsers);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout>
      <CustomHeader />
      <Layout>
        <Navigation />
        <AppRoutes />
      </Layout>
      <CustomFooter />
    </Layout>
  );
}

export default App;
