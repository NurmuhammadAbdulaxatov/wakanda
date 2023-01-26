import React from "react";

function Showcase() {
  return (
    <div className="container">
      <div className="showcase">
        <div className="portion">
          <h1>Recruit top talented freelancer for your business</h1>
          <p>
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </p>
          <a className="btn" href="#">
            Get Started
          </a>
        </div>
        <div className="portion">
          <img src="../public/Images/Group-1.png" alt="" />
        </div>
      </div>
      <div className="showcase-icons">
        <img src="../public/Images/showcase-logos.png" alt="" />
      </div>
    </div>
  );
}

export default Showcase;
