import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">My profile</Link>
      <Link to="/">Feed</Link>
    </div>
  );
};

