import HoverColor from "./HoverColor";
import "./css/Home.css";

export default function Home() {
  return (
    <>
      <HoverColor />
      <div className="video">
        <video /* width="600" height="400" */ controls>
          <source src="R4-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1
        style={{
          color: "#09e8de",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2em",
        }}
      >
        Your sexy, friendly, techno & fetish encounter{" "}
      </h1>
    </>
  );
}
