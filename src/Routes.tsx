import React from "react";
import { Route, Routes } from "react-router";

import Feed from "./Pages/Feed";
import { MyProfile } from "./Pages/MyProfile";
import { NotFound } from "./Pages/NotFound";

const RoutesComponent = () => (
  <Routes>
    <Route element={<Feed />} path="/" />
    <Route element={<MyProfile />} path="/profile" />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesComponent;
