import "./css/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <img className="home-pic" src="\T-shirts\tasse2022.jpg" alt="home" />

      <h1 className="sexy">
        Your sexy, friendly, techno & fetish underground. <br /> Come to us
        through the Left side entrance.{" "}
      </h1>
      <h3>
        {" "}
        <NavLink className="link" to="/notification">
          {" "}
          WE NEED YOU!
        </NavLink>
      </h3>
      <img className="home-pic" src="februar square.png" alt="next" />
    </>
  );
}
