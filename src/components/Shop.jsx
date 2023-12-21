import "./css/Shop.css";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <div className="shop-container">
        <div className="shop-content">
          <div className="short-sleavee">
            <h2>T-Shirt Short Sleave</h2>
            <p>
              {" "}
              Size L - can work as a dress. <br /> Smiling models are 180 and
              195cm tall{" "}
            </p>
          </div>
          <div className="short-image">
            <img src="\T-shirts\L-Short2__.png" alt="L" />

            <p> Sizes: XL - can totally work as a dress</p>

            <img src="\T-shirts\XL-Short1__.png" alt="XL" />
          </div>

          <div className="long-sleave">
            <h2>T-Shirt Long Sleave</h2>

            <p>Sizes: S</p>
          </div>
          <div className="long-image">
            <img src="\T-shirts\S-Long__.png" alt="S" />

            <p>Sizes: M</p>

            <img src="\T-shirts\M-Long2__.png" alt="M" />

            <p>Sizes: left-L, right-XL</p>

            <img src="\T-shirts\L+XL2__.png" alt="L+XL" />

            <p>Sizes: left-XL, right-L</p>

            <img src="\T-shirts\XL+L2__.png" alt="XL+L" />
          </div>
        </div>

        <div className="shop-order">
          <div className="order-heading">
            <h2>Would you like one or two? More?</h2>
            <h3 className="wish">
              Send us your wishes here: <Link to="/contact"> Contact Form</Link>
            </h3>
            <p className="order-how">
              Example: <br /> Type: (short or long?) <br /> Size: (S or M or L
              or XL?) <br /> How many: (1 or 2 or 3...) <br /> Pick up or send?
              Let us know!
            </p>

            <h3 className="design">
              Design is made by lovely Caro (www.pazcarolina.com) <br />{" "}
              Hand-printed in fieldink_studio, Berlin. <br /> Thank you for
              these beauties!
            </h3>
            <h3 className="etsy">
              Or click-{" "}
              <Link to="https://www.etsy.com/de-en/listing/1626984778/fetish-latex-design-shirts?click_key=73c71f67ee0dbc0d7c0261bdb88c5b7ac543c926%3A1626984778&click_sum=4ed0c611&ref=shop_home_active_1&frs=1">
                HERE
              </Link>{" "}
              -and get yours shipped to you via Etsy - price is 35,-, shipping
              included!
            </h3>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
