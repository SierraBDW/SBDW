import React from "react";
import "./contentBoxes.scss";

const ContentBoxes = props => {
  return (
    <>
      <div className="contentBoxes contentBoxTop">
        <img src="images/dogs1.jpg" alt="dog" />
        <div className="titleContent">
          <h1>Title One</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className="contentBoxes contentBoxBottom">
        <div className="titleContent">
          <h1>Title Two</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <img src="images/dogs2.jpg" alt="dog" />
      </div>
    </>
  );
};

export default ContentBoxes;
