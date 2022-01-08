import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="border border-black h-screen mt-20">
      <nav>
        <ul>
          <li>
            <Link to="/ntf">Ntf Preview Card</Link>
          </li>
          <li>
            <Link to="/ordersumary">Order Summary</Link>
          </li>
          <li>
            <Link to="/statspreview">Stats Preview</Link>
          </li>
          <li>
            <Link to="/articlePrev">Article Preview</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
