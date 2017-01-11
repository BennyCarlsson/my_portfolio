import React,{Component} from "react";
import Paper from 'material-ui/Paper';
import Download from 'material-ui/svg-icons/action/get-app';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {

}
const titleStyle = {

}
const imageStyleDiv = {

}
const imageStyle = {

}
const styleCardFooter = {

}
class Projects extends Component{
  render(){
      return(
        <div id="divBeforeProjectContent">
          <div id="projectContent" className="flex-container">
            <div id="projectDiv0" className="projectDiv flex-item">
              <Paper style={style} zDepth={4} className="projectPaperDiv">
                <FlappyTable/>
              </Paper>
            </div>
            <div id="projectDiv1" className="projectDiv flex-item">
              <Paper style={style} zDepth={4} className="projectPaperDiv">
                <FollowMeHomeCard/>
              </Paper>
            </div>
            <div id="projectDiv2" className="projectDiv flex-item">
              <Paper style={style} zDepth={4} className="projectPaperDiv">
                <BaraGodaNyheter/>
              </Paper>
            </div>
            <div id="projectDiv3" className="lastProjectCard projectDiv flex-item">
              <Paper style={style} zDepth={4} className="projectPaperDiv">
                <Styggs/>
              </Paper>
            </div>
          </div>
        </div>
      );
  }
}
class FlappyTable extends Component{
  render(){
    return(
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Flappy Table"/>}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img src="images/Flappytable.png" alt="flappy table project" style={imageStyle}/>
          </div>
        </CardMedia>
        <CardText className="CardTextDiv">
          FlappyTable was a fun project made by <a href="https://github.com/rs222kn" target="_blank">Richard</a> and me during a 24hour hackaton in Kalmar 2016.
          Our weapon of choice where React,Redux and old-fashioned HTML tables. 2500 table cells was used during this project and no ducks got hurt. React and HTML tables might not be te tool for creating a game but we were so preoccupied with whether we could, we didn't stop to thing if we should.
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="https://github.com/BennyCarlsson/hackaton-2016" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          <a href="http://bennycarlsson.com/flappytable/" target="_blank"><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
        </CardActions>
      </Card>
    )
  }
}
class FollowMeHomeCard extends Component{
  render(){
    return(
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Follow Me Home"/>}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img src="images/foljmejhem.png" alt="följ mej hem" style={imageStyle}/>
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
          Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="https://github.com/BennyCarlsson/my_portfolio" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          <a href="http://bennycarlsson.com/foljmejhem/" target="_blank"><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
          <a href="https://play.google.com/store/apps/details?id=com.my.abrownapple.individueltmjukvaruprojekt" target="_blank"><Download className="playstoreicon"/>Playstore</a>
        </CardActions>
      </Card>
    )
  }
}
class BaraGodaNyheter extends Component{
  render(){
    return(
      <Card style={style} className="cardDiv">
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Bara Goda Nyheter"/>}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img src="images/baragodanyheter.png" alt="Bara goda nyheter" style={imageStyle}/>
          </div>
        </CardMedia>
        <CardText className="cardTextDiv">
          Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
        </CardText>
        <CardActions style={styleCardFooter}>
          <a href="https://github.com/BennyCarlsson/my_portfolio" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          <a href="http://bennycarlsson.com/foljmejhem/" target="_blank"><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
        </CardActions>
      </Card>
    )
  }
}
  class Styggs extends Component{
    render(){
      return(
        <Card style={style} className="cardDiv">
          <CardMedia
            overlay={<CardTitle style={titleStyle} title="STYGGS"/>}
          >
            <div className="paperImageClass" style={imageStyleDiv}>
              <img src="images/STYGGS.png" alt="styggs" style={imageStyle}/>
            </div>
          </CardMedia>
          <CardText className="cardTextDiv">
            Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
            Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
            Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
          </CardText>
          <CardActions style={styleCardFooter}>
            <a href="https://github.com/BennyCarlsson/my_portfolio" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
            <a href="http://bennycarlsson.com/foljmejhem/" target="_blank"><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
          </CardActions>
        </Card>
      )
    }
  }
export default Projects;
