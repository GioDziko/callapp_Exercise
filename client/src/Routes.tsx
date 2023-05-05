import React from "react";
import { Route, Routes } from "react-router-dom";
import APP_ROUTES from "./config/routes";
const AppRoutes = () => {
  return (
    <Routes>
      {APP_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
