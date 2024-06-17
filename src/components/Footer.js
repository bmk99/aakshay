import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
      </div>
      <div className="footer-right">
        <ul className="footer-list">
          <li>
            {" "}
            <a href="https://akeshya.com/Terms%20and%20conditions.pdf">
              Terms and conditions
            </a>
          </li>
          <li>
            {" "}
            <a href="https://akeshya.com/Refund%20policy.pdf">Refund policy</a>
          </li>
          <li>
            <a href="https://akeshya.com/Privacy%20policy.pdf">
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
