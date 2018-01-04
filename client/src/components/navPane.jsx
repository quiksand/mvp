import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

module.exports = class LeftNavUndockedExample extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={300}
          open={this.props.open}
          onRequestChange={this.props.drawer.close}
        >
          <MenuItem onClick={this.props.drawer.close}>Menu Item</MenuItem>
          <MenuItem onClick={this.props.drawer.close}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}