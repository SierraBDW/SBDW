import React from "react";
import "./learnMore.css";
import ContentBox from "./contentBox/contentBox";

const LearnMore = () => {
  return (
    <div className="learnContainer">
      <ContentBox id="cb1">
        <div class="contentText">
          <h1 className="title">Title One</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            className="contentImg"
            src={require("../learnMore/images/dogs1.jpg")}
          />
        </div>
      </ContentBox>
      <ContentBox id="cb2">
        <div class="contentText">
          <img
            className="contentImg"
            src={require("../learnMore/images/dogs2.jpg")}
          />
          <h1 className="title">Title Two</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </ContentBox>
      <ContentBox id="cb3">
        <div class="contentText">
          <h1 className="title">Title Three</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            className="contentImg"
            src={require("../learnMore/images/dogs3.jpg")}
          />
        </div>
      </ContentBox>
    </div>
  );
};

export default LearnMore;
