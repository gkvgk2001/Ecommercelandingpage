import React from "react";
import SocialIcons from "./SocialIcons.jsx";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="fotleft">
          <div className="heading heading22">fashion</div>
          <div className="footersmltext smalltxt">
            Complete your style with awesome <br /> clothes from us.
          </div>
          <div className="mediaicons">
            <SocialIcons />
          </div>
        </div>

        <div className="fotright">
          <div className="company">
            <div className="listheading">Company</div>
            <ul>
              <li>About</li>
              <li>Contact us</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="quicklink">
            <div className="listheading">Quick Link</div>
            <ul>
              <li>Share Location</li>
              <li>Order tracking</li>
              <li>size Guide</li>
              <li> faqs</li>
            </ul>
          </div>
          <div className="legal">
            <div className="listheading">legal</div>
            <ul>
              <li>term and Condition</li>
              <li>privacy policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerNote">
        Made by <span className="highlight">Gaurav Kumar</span>
      </div>
    </div>
  );
};

export default Footer;
