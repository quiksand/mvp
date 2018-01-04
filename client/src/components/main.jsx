import React from 'react';
import { MenuBar, NavPane } from '../components';
import AppBar from 'material-ui/AppBar';


module.exports = class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.drawerControls = {
      toggle: this.toggleDrawer.bind(this),
      close: this.closeDrawer.bind(this),
      open: this.openDrawer.bind(this)
    }
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.open });
  }

  closeDrawer() {
    this.setState({ drawerOpen: false });
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Dronio"
          onLeftIconButtonClick={this.drawerControls.open}
          />
        <MenuBar 
          closeDrawer={this.closeDrawer}
          toggleDrawer={this.toggleDrawer}
          drawer={this.drawerControls}
          />
        <NavPane 
          open={this.state.drawerOpen}
          drawer={this.drawerControls}
        />
      </div>
    );
  }
}