import React, { Component } from "react"
import Paper from "material-ui/Paper"
import Download from "material-ui/svg-icons/action/android"
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card"

const style = {}
const titleStyle = {}
const imageStyleDiv = {}
const imageStyle = {}
const styleCardFooter = {}
class Projects extends Component {
  render() {
    return (
      <div id="divBeforeProjectContent">
        <div id="projectContent" className="flex-container">
          <div id="projectDiv0" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <Mandarin />
            </Paper>
          </div>
          <div id="projectDiv0" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <Hacktoberfest />
            </Paper>
          </div>
          <div id="projectDiv0" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <LoremIpsum />
            </Paper>
          </div>
          <div id="projectDiv0" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <FlappyTable />
            </Paper>
          </div>
          <div id="projectDiv1" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <FollowMeHomeCard />
            </Paper>
          </div>
          <div
            id="projectDiv4"
            className="lastProjectCard projectDiv flex-item"
          >
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <BennyCarlsson />
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}
class LoremIpsum extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={
            <CardTitle style={titleStyle} title="Lorem Ipsum Generator" />
          }
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/loremipsumicon.jpg"
              alt="lorem ipsum app icon"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          Lorem Ipsum Generator for your android device. Created with React
          Native + Redux. Available for Android in the{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.bennycarlsson.loremipsum"
            target="_blank"
          >
            Playstore
          </a>
        </CardText>
        <CardActions style={styleCardFooter}>
          <a
            href="https://github.com/BennyCarlsson/LoremIpsumGenerator"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.bennycarlsson.loremipsum"
            target="_blank"
          >
            <Download className="playstoreicon" />
            Playstore
          </a>
        </CardActions>
      </Card>
    )
  }
}
class FlappyTable extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Flappy Table" />}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/flappytable.jpg"
              alt="flappy table project"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          FlappyTable was a fun project made by{" "}
          <a href="https://github.com/rs222kn" target="_blank">
            Richard
          </a>{" "}
          and me during a 24hour hackaton in Kalmar 2016. Our weapon of choice
          were React,Redux and old-fashioned HTML tables. 2500 table cells was
          used during this project and no ducks got hurt. React and HTML tables
          might not be te tool for creating a game but we were so preoccupied
          with whether we could, we didn't stop to think if we should.
        </CardText>
        <CardActions style={styleCardFooter}>
          <a
            href="https://github.com/BennyCarlsson/hackaton-2016"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
          <a href="http://bennycarlsson.com/flappytable/" target="_blank">
            <i className="fa fa-globe" aria-hidden="true" /> Website
          </a>
        </CardActions>
      </Card>
    )
  }
}
class FollowMeHomeCard extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Follow Me Home" />}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/foljmejhem.jpg"
              alt="följ mej hem"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          School project made 2015 while studying at Linnaeus University in
          Kalmar. An Android application made using Java and Android studio with
          small amount of php for backend with a MySQL database. Use the gps in
          your phone to make sure you or your friends gets home safely!
          Available free for Android in the{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.my.abrownapple.individueltmjukvaruprojekt"
            target="_blank"
          >
            Playstore
          </a>
        </CardText>
        <CardActions style={styleCardFooter}>
          <span className="disabledLink">
            <i className="fa fa-github tooltip" aria-hidden="true" /> Github
          </span>
          <span className="tooltiptext">Not on github</span>
          <a href="http://bennycarlsson.com/foljmejhem/" target="_blank">
            <i className="fa fa-globe" aria-hidden="true" /> Website
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.my.abrownapple.individueltmjukvaruprojekt"
            target="_blank"
          >
            <Download className="playstoreicon" />
            Playstore
          </a>
        </CardActions>
      </Card>
    )
  }
}
class Mandarin extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Mandarin Quiz" />}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/mandarin.JPG"
              alt="Mandarin quiz website screenshot"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          While studying mandarin in Shanghai spring 2019 I created this quiz
          app to help my classmates and myself to practice the mandarin
          characters called hanzi (汉字). This is a progressive web app (PWA)
          made with ReactJS . Works best on mobile
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="https://github.com/BennyCarlsson/mandarin" target="_blank">
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
          <a href="https://bennycarlsson.github.io/mandarin/" target="_blank">
            <i className="fa fa-globe" aria-hidden="true" /> Website
          </a>
        </CardActions>
      </Card>
    )
  }
}
class Hacktoberfest extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Hacktoberfest 2018" />}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/hacktoberfest-small.jpg"
              alt="hacktoberfest website printscreen"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          Hacktoberfest is a month-long celebration of open source software.
          This project created together with{" "}
          <a href="https://github.com/rs222kn" target="_blank">
            Richard
          </a>{" "}
          was our contribution to the open source celebration. With over 800
          contributors, 1800 forks and 2000 pull request we managed to create an
          horrendous website. The website itself is a guide on how to get
          started with contributing to open source projects. At the same time
          being the project that you can contribute to by adding more
          information or changing the design.
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="https://github.com/lingonsaft/hacktoberfest" target="_blank">
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
          <a href="https://hacktoberfest.lingonsaft.com/" target="_blank">
            <i className="fa fa-globe" aria-hidden="true" /> Website
          </a>
        </CardActions>
      </Card>
    )
  }
}
class BennyCarlsson extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="BennyCarlsson.com" />}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/benny_carlsson_website.jpg"
              alt="BennyCarlsson.com"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          Check out the code for this website that I created using React.js
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="http://bennycarlsson.com/" target="_blank">
            <i className="fa fa-globe" aria-hidden="true" /> Website
          </a>
          <a
            href="https://github.com/BennyCarlsson/my_portfolio"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
        </CardActions>
      </Card>
    )
  }
}
export default Projects
