import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Person from 'material-ui/svg-icons/social/person';
import Folder from 'material-ui/svg-icons/file/folder';
import Description from 'material-ui/svg-icons/action/description';
import Email from 'material-ui/svg-icons/communication/email';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

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
  constructor(props) {
   super(props);
   this.state = {
     slideIndex: 0,
   };
  }

  handleChange = (value) => {
   this.setState({
     slideIndex: value,
   });
  }
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
      <div>
        <Tabs
          inkBarStyle={{display: 'none'}}
          tabItemContainerStyle={{background: '#00838F'}}
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab style={styles.tab} icon={<Person/>} label="ABOUT" value={0} />
          <Tab style={styles.tab} icon={<Folder/>} label="PROJECTS" value={1} />
          <Tab style={styles.tab} icon={<Email/>} label="CONTACT" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <About/>
          </div>
          <div style={styles.slide}>
            <Projects/>
          </div>
          <div style={styles.slide}>
            <Contact/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
export default DropDown;
