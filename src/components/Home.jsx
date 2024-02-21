import "./css/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img className="home-pic" src="\T-shirts\tasse2022.jpg" alt="home" />

      <h1 className="sexy">
        Your sexy, friendly, techno & fetish underground. <br /> Come and dance
        with us!{" "}
      </h1>
      <h3>
        {" "}
        {/*  <NavLink className="link" to="/notification">
          {" "}
          WE NEED YOU!
        </NavLink> */}
      </h3>
      <img className="home-pic" src="OHM.jpg" alt="next" />
    </>
  );
}
