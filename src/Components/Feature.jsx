import React from "react";

function Feature() {
  return (
    <div className="feature">
      <div className="container">
        <div className="feature-text">
          <h3>FEATURE</h3>
          <h2>The benefit of using our platform</h2>
        </div>
        <div className="feature-cards">
          <div className="card-1">
            <img src="../public/Images/icon-1.png" alt="" />
            <h4>Professional & Fast</h4>
            <p>
              Search and hire the most talented freelancers to match your needs.
              No matter what you need done, we've got the perfect freelancer for
              you.
            </p>
          </div>
          <div className="card-1">
            <img src="../public/Images/icon-2.png" alt="" />
            <h4>24/7 support</h4>
            <p>
              You have any concerns or questions? Don't worry, we have our
              support team to help you at anytime and anywhere.
            </p>
          </div>
          <div className="card-1">
            <img src="../public/Images/icon-3.png" alt="" />
            <h4>Safe & Secure</h4>
            <p>
              We know that safety is the most important thing for our customer,
              so all of our payments are processed instantly and securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
