import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__link">
          <Link to="/">My profile</Link>
        </div>

        <div className="header__link">
          <Link to="/feed">Feed</Link>
        </div>
      </div>
    </div>
  );
};
