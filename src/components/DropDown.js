import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

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
        <List>
          <ListItem primaryText="About" disableKeyboardFocus={true}/>
          <ListItem primaryText="Projects" disableKeyboardFocus={true}/>
          <ListItem primaryText="Lorem Ipsum" disableKeyboardFocus={true}/>
          <ListItem primaryText="Contact" disableKeyboardFocus={true}/>
        </List>
      </Paper>
    </div>
    );
  }
}
export default DropDown;
