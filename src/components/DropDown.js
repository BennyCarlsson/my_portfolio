import React, { Component } from 'react';
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
      <div id="DropDownMenuDiv">
      <Paper className="DropDownMenu">
        <Menu>
          <MenuItem primaryText="About" />
          <MenuItem primaryText="Projects" />
          <MenuItem primaryText="Lorem Ipsum" />
          <MenuItem primaryText="Contact" />
        </Menu>
      </Paper>
    </div>
    );
  }
}
export default DropDown;
