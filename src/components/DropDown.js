import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Person from 'material-ui/svg-icons/social/person';
import Folder from 'material-ui/svg-icons/file/folder';
import Description from 'material-ui/svg-icons/action/description';
import Email from 'material-ui/svg-icons/communication/email';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab: {
      fontSize: 24,
  },
  tabs: {
    backgroundColor:"#00838F",
  }
}

class DropDown extends Component{
  aboutClick(){
    this.props.showPage("About");
  }
  projectClick(){
    this.props.showPage("Projects");
  }
  contactClick(){
    this.props.showPage("Contact");
  }
  render() {
    return (
      <div id="DropDownMenuDiv">
  <Tabs inkBarStyle={{backgroundColor: 'red'}} className="tabs">
    <Tab style={styles.tab} icon={<Person/>} label="ABOUT">
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
      </div>
    </Tab>
    <Tab style={styles.tab} icon={<Folder/>} label="PROJECTS">
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab style={styles.tab} icon={<Email/>} label="CONTACT">
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
    </div>
    );
  }
}
export default DropDown;
