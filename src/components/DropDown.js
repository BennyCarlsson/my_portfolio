import React, { Component } from 'react';
import Person from 'material-ui/svg-icons/social/person';
import Folder from 'material-ui/svg-icons/file/folder';
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
  },
  displayNone:{
    display:"none",
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
   this.props.showPage();
  }
  render() {
    return (
      <div id="menyTabsDiv">
        <MyTabs handleChange={this.handleChange.bind(this)}
          slideIndex={this.state.slideIndex}
          />
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
          </div>
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

class MyTabs extends Component{
  render(){
    return(
      <div>
        <span className="desktopOnly">
        <Tabs
          inkBarStyle={{display: 'none'}}
          tabItemContainerStyle={{background: '#00838F'}}
          onChange={this.props.handleChange}
          value={this.props.slideIndex}
        >
          <Tab style={styles.displayNone} value={0} />
          <Tab style={styles.tab} label="ABOUT" value={1} />
          <Tab style={styles.tab} label="PROJECTS" value={2} />
          <Tab style={styles.tab} label="CONTACT" value={3} />
        </Tabs>
        </span>
        <span className="mobileOnly">
        <Tabs
          inkBarStyle={{display: 'none'}}
          tabItemContainerStyle={{background: '#00838F'}}
          onChange={this.props.handleChange}
          value={this.props.slideIndex}
        >
          <Tab style={styles.displayNone} value={0} />
          <Tab style={styles.tab} icon={<Person/>} value={1} />
          <Tab style={styles.tab} icon={<Folder/>} value={2} />
          <Tab style={styles.tab} icon={<Email/>} value={3} />
        </Tabs>
        </span>
      </div>
    );
  }
}
export default DropDown;
