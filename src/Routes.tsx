import React from "react";
import { Route, Routes } from "react-router";

import Feed from "./Pages/Feed";
import MyProfile from "./Pages/MyProfile";
import NotFound from "./Pages/NotFound";

const RoutesComponent = (): JSX.Element => (
  <Routes>
    <Route element={<MyProfile />} path="/" />
    <Route element={<Feed />} path="/feed" />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesComponent;
