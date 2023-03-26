import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <>
      <div className="plansScreen">
        <div className="ind-plan">
          <div className="plan-name">
            <h3>Premium</h3>
            <h5>4K + HDR</h5>
          </div>
          <div className="plan-selected-button">
            <button>Current Plan</button>
          </div>
        </div>
        <div className="ind-plan">
          <div className="plan-name">
            <h3>Standard</h3>
            <h5>1080p</h5>
          </div>
          <div className="plan-button">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="ind-plan">
          <div className="plan-name">
            <h3>Basic</h3>
            <h5>720p</h5>
          </div>
          <div className="plan-button">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlansScreen;
