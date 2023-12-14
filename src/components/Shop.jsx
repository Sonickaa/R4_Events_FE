import "./css/Shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div className="shop-container">
        <div className="shop-headings">
          <div className="short-sleave">
            <h2>T-Shirt Short Sleave</h2>
            <p className="sizes">
              {" "}
              Sizes: L - can work as a dress. Smiling models are 180 and 195cm
              tall{" "}
            </p>
            <div className="short-image">
              <img src="\T-shirts\L-Short2__.png" alt="L" />
              <img src="\T-shirts\L-Short0__.png" alt="L" />
              <p className="sizes"> Sizes: XL - can totally work as a dress</p>
              <img src="\T-shirts\XL-Short__.png" alt="XL" />
              <img src="\T-shirts\XL-Short1__.png" alt="XL" />
            </div>
          </div>
          <div className="long-sleave">
            <h2>T-Shirt Long Sleave</h2>

            <p className="sizes">Sizes: S</p>
            <img src="\T-shirts\S-Long__.png" alt="S" />
            <img src="\T-shirts\S-Long2__.png" alt="S" />

            <p className="sizes">Sizes: M</p>
            <img src="\T-shirts\M-Long__.png" alt="M" />
            <img src="\T-shirts\M-Long2__.png" alt="M" />
            <p className="sizes">Sizes: L</p>
            {/*  <img src="\T-shirts\L-Long__.png" alt="L" /> */}
            <img src="\T-shirts\L-Long2__.png" alt="L" />
            <img src="\T-shirts\L-Long3__.png" alt="L" />

            <p className="sizes">Sizes: XL</p>
            <img src="\T-shirts\XL-Long__.png" alt="XL" />
            <img src="\T-shirts\XL-Long2__.png" alt="XL" />

            <p className="sizes">Sizes: left-L, right-XL</p>
            <img src="\T-shirts\L+XL__.png" alt="L+XL" />
            <img src="\T-shirts\L+XL2__.png" alt="L+XL" />

            <p className="sizes">Sizes: left-XL, right-L</p>
            <img src="\T-shirts\XL+L__.png" alt="XL+L" />
            <img src="\T-shirts\XL+L2__.png" alt="XL+L" />
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
          XL?) <br /> How many: (1 or 2 or 3...) <br /> Pick up or send? Let us
          know!
        </p>
        <h3 className="design">
          Design is made by lovely Caro (www.pazcarolina.com) <br />{" "}
          Hand-printed in fieldink_studio, Berlin. <br /> Thank you for these
          beauties!
        </h3>
      </div>
    </>
  );
}
