import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="section">
          <div className="f-logos">
            <img src="../public/Images/Logo.png" alt="" />

            <p>Copyright © 2022 Wakanda. All rights reserved</p>
          </div>
          <div className="company">
            <strong>Company</strong>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>How it works</li>
              <li>For freelancer</li>
            </ul>
          </div>
          <div className="support">
            <strong>Support</strong>
            <ul>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="subscribe">
            <strong>Subscribe our newsletter</strong>
            <input type="text" placeholder="Your email address" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
