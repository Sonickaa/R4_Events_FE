import "./css/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img className="home-pic" src="\T-shirts\tasse2022.jpg" alt="home" />

      <h1 className="sexy">Your sexy, friendly, techno & fetish encounter </h1>
      <h3>
        {" "}
        <NavLink className="link" to="/shop">
          {" "}
          T-Shirts
        </NavLink>
      </h3>
      <img className="home-pic" src="/raumvier-oct-FB-3.png" alt="next" />
    </>
  );
}
