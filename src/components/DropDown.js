import React, { Component } from "react"
import Person from "material-ui/svg-icons/social/person"
import Folder from "material-ui/svg-icons/file/folder"
import Email from "material-ui/svg-icons/communication/email"
import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  tab: {
    fontSize: 24,
    backgroundColor: "#FAFAFE",
    color: "#00838f",
    fontColor: "#00838f"
  },
  activeTab: {
    fontSize: 24,
    backgroundColor: "#FAFAFE",
    color: "#00838f",
    textDecoration: "underline"
  },
  tabs: {
    backgroundColor: "#FAFAFE"
  },
  displayNone: {
    display: "none"
  }
}
class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
      animateTransitions: false
    }
  }
  handleChange = value => {
    if (this.state.slideIndex === 0 || value === 0) {
      this.setState({ animateTransitions: false })
    }
    this.setState({
      slideIndex: value
    })
    this.props.showPage()
  }
  onTransitionEnd() {
    if (this.state.slideIndex !== 0) {
      this.setState({ animateTransitions: true })
    } else {
      this.props.resetPage()
    }
  }
  render() {
    return (
      <div id="menyTabsDiv">
        <MyTabs
          handleChange={this.handleChange.bind(this)}
          slideIndex={this.state.slideIndex}
        />
        <SwipeableViews
          animateTransitions={this.state.animateTransitions}
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          onTransitionEnd={this.onTransitionEnd.bind(this)}
        >
          <div />
          <div>
            <About />
          </div>
          <div style={styles.slide}>
            <Projects />
          </div>
          <div style={styles.slide}>
            <Contact />
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

class MyTabs extends Component {
  render() {
    return (
      <div>
        <span className="desktopOnly">
          <Tabs
            inkBarStyle={{ display: "none" }}
            tabItemContainerStyle={styles.tabs}
            onChange={this.props.handleChange}
            value={this.props.slideIndex}
          >
            <Tab style={styles.displayNone} value={0} />
            <Tab
              style={
                this.props.slideIndex === 1 ? styles.activeTab : styles.tab
              }
              label="ME"
              value={1}
            />
            <Tab
              style={
                this.props.slideIndex === 2 ? styles.activeTab : styles.tab
              }
              label="PROJECTS"
              value={2}
            />
            <Tab
              style={
                this.props.slideIndex === 3 ? styles.activeTab : styles.tab
              }
              label="CONTACT"
              value={3}
            />
          </Tabs>
        </span>
        <span className="mobileOnly">
          <Tabs
            inkBarStyle={{ display: "none" }}
            tabItemContainerStyle={styles.tab}
            onChange={this.props.handleChange}
            value={this.props.slideIndex}
          >
            <Tab style={styles.displayNone} value={0} />
            <Tab
              style={styles.tab}
              icon={
                <span
                  className={
                    this.props.slideIndex === 1
                      ? "menuIconsActive"
                      : "menuIcons"
                  }
                >
                  <Person />
                </span>
              }
              value={1}
            />
            <Tab
              style={styles.tab}
              icon={
                <span
                  className={
                    this.props.slideIndex === 2
                      ? "menuIconsActive"
                      : "menuIcons"
                  }
                >
                  {" "}
                  <Folder />
                </span>
              }
              value={2}
            />
            <Tab
              style={styles.tab}
              icon={
                <span
                  className={
                    this.props.slideIndex === 3
                      ? "menuIconsActive"
                      : "menuIcons"
                  }
                >
                  {" "}
                  <Email />
                </span>
              }
              value={3}
            />
          </Tabs>
        </span>
      </div>
    )
  }
}
export default DropDown
