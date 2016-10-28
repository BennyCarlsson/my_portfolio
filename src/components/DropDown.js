import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Person from 'material-ui/svg-icons/social/person';
import Folder from 'material-ui/svg-icons/file/folder';
import Description from 'material-ui/svg-icons/action/description';
import Email from 'material-ui/svg-icons/communication/email';

class DropDown extends Component{
  aboutClick(){
    this.props.showPage("About");
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
          <ListItem primaryText="About" leftIcon={<Person/>} onClick={this.aboutClick.bind(this)}/>
          <ListItem primaryText="Projects" leftIcon={<Folder/>} onClick={this.projectClick.bind(this)}/>
          <ListItem primaryText="Lorem Ipsum" leftIcon={<Description/>} onClick={this.loremIpsumClick.bind(this)}/>
          <ListItem primaryText="Contact" leftIcon={<Email/>} onClick={this.contactClick.bind(this)}/>
        </List>
      </Paper>
    </div>
    );
  }
}
export default DropDown;
