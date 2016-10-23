import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

class DropDown extends Component{
  aboutClick(){
    this.props.showPage();
  }
  projectClick(){
    this.props.showPage();
  }
  loremIpsumClick(){
    this.props.showPage();
  }
  contactClick(){
    this.props.showPage();
  }
  render() {
    return (
      <div id="DropDownMenuDiv">
      <Paper className="DropDownMenu">
        <List>
          <ListItem primaryText="About" onClick={this.aboutClick.bind(this)}/>
          <ListItem primaryText="Projects" onClick={this.projectClick.bind(this)}/>
          <ListItem primaryText="Lorem Ipsum" onClick={this.loremIpsumClick.bind(this)}/>
          <ListItem primaryText="Contact" onClick={this.contactClick.bind(this)}/>
        </List>
      </Paper>
    </div>
    );
  }
}
export default DropDown;
