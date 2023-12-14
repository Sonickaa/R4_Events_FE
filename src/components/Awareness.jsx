import "./css/Awareness.css";

export default function Awareness() {
  return (
    <>
      <div className="awareness-container">
        <h4 className="awareness-text">
          We're an open and tolerant place. <br /> No homophobia, no
          transphobia, no racism, no sexism, no bodyshaming, no violence. <br />{" "}
          If you encounter or experience any of these situations during our
          event, please come to us. <br /> Even if you are not sure, if
          something felt uncomfortable, don't hesitate to ask us. <br />
          Consent is sexy. <br /> Communicate clearly, get a clear yes, give a
          clear no. If somebody doesn't understand these simple words, let us
          know. <br /> Look after each other and have fun!
        </h4>
      </div>
      <div className="video-container">
        <video /* width="600" height="400" */ controls>
          <source src="R4-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video /* width="600" height="400" */ controls>
          <source src="r4-video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
