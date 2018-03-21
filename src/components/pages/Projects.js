import React, { Component } from "react"
import Paper from "material-ui/Paper"
import Download from "material-ui/svg-icons/action/get-app"
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
              <FlappyTable />
            </Paper>
          </div>
          <div id="projectDiv1" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <FollowMeHomeCard />
            </Paper>
          </div>
          <div id="projectDiv2" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <BaraGodaNyheter />
            </Paper>
          </div>
          <div id="projectDiv3" className="projectDiv flex-item">
            <Paper style={style} zDepth={2} className="projectPaperDiv">
              <Styggs />
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
          <div
            id="projectDiv5"
            className="lastProjectCard projectDiv flex-item"
          >
            <Paper style={style} zDepth={2} className="projectPaperDiv" />
          </div>
        </div>
      </div>
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
          School project made 2015 at Linnaeus University in Kalmar. An Android
          application made using Java and Android studio with small amount of
          php for backend with a MySQL database. Use the gps in your phone to
          make sure you or your friends gets home safely! Available for Android
          free in the{" "}
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
            <Download className="playstoreicon" />Playstore
          </a>
        </CardActions>
      </Card>
    )
  }
}
class BaraGodaNyheter extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Bara Goda Nyheter" />}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img
              src="images/baragodanyheter.jpg"
              alt="Bara goda nyheter"
              style={imageStyle}
            />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          BaraGodaNyheter (OnlyGoodNews) is a PHP project made at Linnaeus
          University in Kalmar 2014. With the current media only reporting all
          he horrible stuff in the world it's easy to se pass all the beauty in
          the world and all the wonderful people living in it. I would love to
          se more news focusing on all the good things happening in the world.
          On the admin page it's also possible to write/edit/delete Articles,
          post youtube videos, upload images, create and handle authors
          accounts, handle pending articles and much more.
        </CardText>
        <CardActions style={styleCardFooter}>
          <a
            href="https://github.com/BennyCarlsson/php-baragodanyheter"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
          <a href="http://bennycarlsson.com/baragodanyheter/" target="_blank">
            <i className="fa fa-globe" aria-hidden="true" /> Website
          </a>
        </CardActions>
      </Card>
    )
  }
}
class Styggs extends Component {
  render() {
    return (
      <Card style={style} className="cardDiv">
        <CardMedia overlay={<CardTitle style={titleStyle} title="STYGGS" />}>
          <div className="paperImageClass" style={imageStyleDiv}>
            <img src="images/STYGGS.jpg" alt="styggs" style={imageStyle} />
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          PHP project made at Linnaeus University in Kalmar 2014 with a friend.
          It's a text base RPG game. Register and try it out or just use the
          test account Username: testperson Password: password
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="https://github.com/BennyCarlsson/php-STYGGS" target="_blank">
            <i className="fa fa-github" aria-hidden="true" /> Github
          </a>
          <a href="http://bennycarlsson.com/styggs/" target="_blank">
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
