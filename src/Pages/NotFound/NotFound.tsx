import React from "react";
import notFoundPic from "../../assets/notFound.jpeg";

import "./NotFound.scss";

export const NotFound = (): JSX.Element => (
  <div className="not_found">
    <h2>404</h2>
    <img src={notFoundPic} alt="not found" />
  </div>
);
