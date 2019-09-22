import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./bookingBtn.css";

export default function BookingBtn() {
  return (
    <div>
    <Link to="../../calendar/calendar.jsx" className="bookingLink">
      <Button variant="contained" color="secondary">
        Book an Appointment
      </Button>
    </Link>
    </div>
  );
};