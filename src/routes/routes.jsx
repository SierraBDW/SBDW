import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/home";
import Calendar from "../calendar/calendar";

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/Calendar" component={Calendar} />
        </div>
    );
}

export default Routes;