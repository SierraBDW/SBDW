import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
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
          <AppBar className="appBar" style={{ fontFamily: "Mansalva", backgroundColor: "#a6c5df" }}
            zDepth={10}
            title={<div className="app-bar-title">Boulder Dogs Logo</div>}
            iconElementLeft={
              <FontIcon onClick={this.handleToggle} className="material-icons">
                <MenuIcon className="hamburger"/>
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
              <MenuItem>Book an Appointment</MenuItem>
            </Link>
            <Link to="/about">
              <MenuItem>About</MenuItem>
            </Link>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default navBar;
