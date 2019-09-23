import React from "react";
import "./bgVid.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Icon from "@material-ui/core/Icon";
import LearnMore from "../learnMore/learnMore";
import { HashLink as Link } from "react-router-hash-link";

const BgVid = () => {
  return (
    <div>
      <div className="chevron">
        <Link smooth to="#learnMore">
          <ExpandMoreIcon className="expand" style={{ fontSize: "200px" }} />
        </Link>
      </div>
      <video className="video" autoPlay>
        <source src={`${process.env.PUBLIC_URL}/backgroundVid.mp4`} />
      </video>
      <div className="button">
        <a href="../../calendar/calendar.jsx">Book an Appointment</a>
      </div>
      <div id="learnMore">
        <LearnMore />
      </div>
    </div>
  );
};

export default BgVid;
