import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../navBar/navBar.css";

const styles = {
  navBar: { top: AppBar.height }
};

class navBar extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            className="appBar"
            style={{ fontFamily: "Mansalva", backgroundColor: "#a6c5df" }}
            zDepth={10}
            title={<div className="app-bar-title">Boulder Dogs Logo</div>}
            iconElementLeft={
              <FontIcon onClick={this.handleToggle} className="material-icons">
                <MenuIcon
                  style={{ textDecoration: "none" }}
                  className="hamburger"
                />
              </FontIcon>
            }
          />
          <Drawer
            open={this.state.open}
            width={200}
            containerStyle={styles.navBar}
          >
            <Link to="/">
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to="/calendar">
              <MenuItem>About Us</MenuItem>
            </Link>
            <Link to="/about">
              <MenuItem>FAQ</MenuItem>
            </Link>
            <Link>
              <MenuItem>Book An Appointment</MenuItem>
            </Link>
            <Link>
              <MenuItem>Services</MenuItem>
            </Link>
            <Link>
              <MenuItem>Pricing</MenuItem>
            </Link>
            <Link>
              <MenuItem>Contact Us</MenuItem>
            </Link>
            <Link to="/admin">
              <MenuItem>Admin</MenuItem>
            </Link>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default navBar;
