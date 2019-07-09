import React, { Component } from "react"
import Avatar from "material-ui/Avatar"
import Paper from "material-ui/Paper"
import Chip from "material-ui/Chip"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = { secondsSinceMyBirth: 0, yearsSinceMyBirth: 0 }
  }
  setTime() {
    var birthday = new Date(1993, 3, 27, 9, 32, 0).getTime()
    var today = new Date().getTime()
    var time = today / 1000 - birthday / 1000
    var years = Math.floor(time / 31536000)
    var seconds = Math.round(time)
    this.setState({ secondsSinceMyBirth: seconds, yearsSinceMyBirth: years })
  }
  componentWillMount() {
    this.setTime()
  }
  componentDidMount() {
    window.setInterval(
      function() {
        this.setTime()
      }.bind(this),
      1000
    )
  }
  render() {
    return (
      <div id="aboutContentDiv">
        <Paper id="paperContent" zDepth={2}>
          <Paper
            id="paperAvatar"
            className="desktopOnly"
            zDepth={2}
            circle={true}
          >
            <Avatar id="avatarImage" src="images/BennyCarlsson.jpg" />
          </Paper>
          <div id="aboutTextDiv">
            <h2>Hello World!</h2>
            <p>
              <Paper
                id="paperAvatar"
                className="mobileOnly"
                zDepth={1}
                circle={true}
              >
                <Avatar id="avatarImage" src="images/BennyCarlsson.jpg" />
              </Paper>
              My name is <span className="heavyFont">Benny Carlsson</span>. Born{" "}
              <span className="heavyFont">
                {this.state.yearsSinceMyBirth} years
              </span>{" "}
              ago in a small town called Nässjö in Sweden. I later 2012 studied
              Software Development at Linnaeus University in Kalmar. After that
              I spent some time working full time as a software developer mostly
              java, javascript and Reactjs. <br />I love programming and
              everything that has to do with technology, the internet and
              writing code.
            </p>

            <Chips />
            <SocialMediaPhone />
          </div>
          <SocialMediaDesktop />
        </Paper>
      </div>
    )
  }
}
const styles = {
  chip: {
    margin: 10
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
}
class Chips extends Component {
  render() {
    return (
      <div id="listAbout">
        <h3>Skills / Knowledge</h3>
        <div style={styles.wrapper}>
          <Chip style={styles.chip}>JavaScript</Chip>
          <Chip style={styles.chip}>ReactJS</Chip>
          <Chip style={styles.chip}>React Native</Chip>
          <Chip style={styles.chip}>Java</Chip>
          <Chip style={styles.chip}>PHP</Chip>
          <Chip style={styles.chip}>HTML5</Chip>
          <Chip style={styles.chip}>CSS3</Chip>
          <Chip style={styles.chip}>Git</Chip>
          <Chip style={styles.chip}>Sql</Chip>
          <Chip style={styles.chip}>Scrum</Chip>
        </div>
      </div>
    )
  }
}
class SocialMediaPhone extends Component {
  render() {
    return (
      <span className="mobileOnly">
        <SocialMedia />
      </span>
    )
  }
}
class SocialMediaDesktop extends Component {
  render() {
    return (
      <span className="desktopOnly">
        <SocialMedia />
      </span>
    )
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaAbout">
        <a
          href="https://www.linkedin.com/in/benny-carlsson-620226ba"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/Benny_Carlsson" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true" />
        </a>
        <a href="https://github.com/BennyCarlsson" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
export default About
