import HoverColor from "./HoverColor";
import "./css/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HoverColor />

      <h1>Your sexy, friendly, techno & fetish encounter </h1>
      <h3>
        {" "}
        <NavLink className="link" to="/Shop">
          {" "}
          T-Shirts
        </NavLink>
      </h3>
    </>
  );
}
