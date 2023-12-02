import "./css/Shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div className="shop-container">
        <div className="shop-headings">
          <div className="short-sleave">
            <h2>T-Shirt Short Sleave</h2>
            <p className="sizes"> Sizes: S, M, L, XL</p>
            <div className="short-image">
              <img src="\Scansione 3.jpg" alt="" />
              <img src="\Scansione 6.jpg" alt="" />
            </div>
          </div>
          <div className="long-sleave">
            <h2>T-Shirt Long Sleave</h2>
            <p className="sizes">Sizes: S, M, L, XL</p>
            <div className="long-image">
              <img src="\Scansione 7.jpg" alt="" />
              <img src="\Scansione 18.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="shop-order">
        <div className="order-heading">
          <h2>Would you like one or two? More?</h2>
          <h4 className="wish">
            Send us your wishes here: <Link to="/contact">Contact Form</Link>
          </h4>
        </div>
      </div>
      <div className="order-how">
        <p>
          Example: <br /> Type: (short or long?) <br /> Size: (S or M or L or
          XL?) <br /> How many: (1 or 2 or 3...)
        </p>
      </div>
    </>
  );
}
