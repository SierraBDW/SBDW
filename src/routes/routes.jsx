import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Home from "../home/home";
import Calendar from "../calendar/calendar";
import About from "../about/about";

class Routes extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div classname="Routes">
                <Router>
                    <NavBar />
                    <Route exact path= "/" component={ Home } />
                    <Route path="/calendar" component={ Calendar } />
                    <Route path="/about" component={ About } />
                </Router>
            </div>
        )
    }
}

export default Routes;