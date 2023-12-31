import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
