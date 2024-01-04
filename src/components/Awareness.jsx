import "./css/Awareness.css";
import HoverColor from "./HoverColor";

export default function Awareness() {
  return (
    <>
      <div className="awareness-container">
        <h3 className="awareness-text">Who is Raumvier?</h3>
        <h4>
          Berlin based small label organizing techno music events in fetish
          friendly spaces. Once a month you can find them lighting up the
          dancefloors somewhere in the city. <br /> Essentially, they are
          bringing back the original night club culture to every space they
          perform. Creating an environment free of judgment where pleasures and
          desires are explored. <br /> A temporary Trip existing only by the
          energy of its people inside. Since the founders wanted to offer an
          intimate atmosphere where a real feeling of freedom is experienced by
          the dancers, they count with a specifically trained Awareness Team.
          Raumvier is a dream. The dream of two humans who believe in music and
          the ability to bring back authentic spaces. <br /> A bridge for
          artists to share and spread good contemporary techno. It's a very
          personal dream, where you can taste the flavors of each of its
          founders on every edition.
        </h4>
        <h3 className="awareness-text">What is the mission of Raumvier?</h3>
        <h4>
          Their commitment to music is in body and soul. Supreme respect for art
          is part of their culture. They have a great sense for detail and their
          aim is to keep growing with the different artists that come to their
          floors, offering their dancers always a better experience. <br /> To
          bring back the sacredness of the Raum, where music is the queen and
          dancers from all over the world come to feel authentic and innovative
          techno. To create a strong community that supports the same values and
          is just as passionate as them. <br /> To give back to the people the
          power to connect and manifest unique energetic fields in the
          dancefloor.
        </h4>
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
        <HoverColor />
      </div>
    </>
  );
}
