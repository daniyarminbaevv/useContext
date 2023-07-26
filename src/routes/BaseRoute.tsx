import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";

const BaseRoute: FC<RouteProps> = ({ path, element }) => {
  return <Route path={path} element={<BaseLayout>{element}</BaseLayout>} />;
};

export default BaseRoute;
