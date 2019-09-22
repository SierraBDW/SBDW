import React from "react";
import "./bgVid.css";

const BgVid = () => {
  return (
    <div>
        <video autoPlay>
          <source src={`${process.env.PUBLIC_URL}/backgroundVid.mp4`} />
        </video>
        <div className="button">
            <a href="../../calendar/calendar.jsx">Book an Appointment</a>
        </div>
    </div>
  );
};

export default BgVid;
