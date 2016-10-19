import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

class DropDown extends Component{
    constructor(props) {
      super(props);
      this.state = {value: 1};
    }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
      <Paper className="DropDownMenu">
        <Menu>
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help &amp; feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Sign out" />
        </Menu>
      </Paper>
    </div>
    );
  }
}
export default DropDown;
