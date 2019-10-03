import React from "react";
import "./bgVid.scss";
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
      <video className="video" autoPlay muted loop style={{  }}>
        <source src={`${process.env.PUBLIC_URL}/backgroundVid.mp4`} />
      </video>
      <div className="heading">
        <h1 style={{ opacity: "1" }}>Locally Sourced Pet Care</h1>
      </div>
      <Link to="/calendar">
        <div className="button">       
            Book an Appointment
        </div>
      </Link>
      <div id="learnMore">
        <LearnMore />
      </div>
    </div>
  );
};

export default BgVid;
