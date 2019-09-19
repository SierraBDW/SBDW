// import React from "react";
// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//    <header>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/calendar">Calendar</NavLink>
//     </header>
//   )
// };

// export default NavBar;

import React, { Component } from "react";
// import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

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
            zDepth={10}
            title="Some title"
            iconElementLeft={
              <FontIcon onClick={this.handleToggle} className="material-icons">
                <MenuIcon/>
              </FontIcon>
            }
          />
          <Drawer
            open={this.state.open}
            width={200}
            containerStyle={styles.navBar}
          >
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default navBar;
