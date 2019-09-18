import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Home from "../home/home";

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
                </Router>
            </div>
        )
    }
}

export default Routes;