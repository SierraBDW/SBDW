import React from "react";
import "./bgVid.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LearnMore from "../learnMore/learnMore";
import { HashLink as Link } from "react-router-hash-link";

const BgVid = () => {
  return (
    <div className="container">
      <div className="chevron">
        <Link smooth to="#learnMore">
          <ExpandMoreIcon style={{ fontSize: "100px", marginLeft: "10%"}} />
        </Link>
      </div>
      <video className="video" autoPlay muted loop>
        <source src={`${process.env.PUBLIC_URL}/backgroundVid.mp4`} />
      </video>
      <div className="button">
        <a  href="../../calendar/calendar">
          Book an Appointment
        </a>
      </div>
      <div id="learnMore">
        <LearnMore />
      </div>
    </div>
  );
};

export default BgVid;
