import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
