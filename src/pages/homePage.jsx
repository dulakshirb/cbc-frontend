import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Home Page </h1>
      <Link to="/login">Login</Link>
    </div>
  );
};
