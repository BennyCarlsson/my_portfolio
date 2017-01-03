import React,{Component} from "react";
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: 250,
  width: "30%",
  margin: "1%",
  textAlign: 'center',
  display: 'inline-block',
  marginBottom: "2%"
};
const titleStyle = {
  padding:0
}
const imageStyleDiv = {
  height: 136,
  overflow: "hidden"
}
const imageStyle = {
  width:"100%"
}
class Projects extends Component{
  render(){
      return(
        <div id="projectContent">
        <div id="projectDiv1" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <FollowMeHomeCard/>
          </Paper>
        </div>
        <div id="projectDiv2" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <BaraGodaNyheter/>
          </Paper>
        </div>
        <div id="projectDiv3" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <Styggs/>
          </Paper>
        </div>
        <div id="projectDiv4" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <FollowMeHomeCard/>
          </Paper>
        </div>
        <div id="projectDiv5" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <FollowMeHomeCard/>
          </Paper>
        </div>
        <div id="projectDiv6" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <FollowMeHomeCard/>
          </Paper>
        </div>
        </div>
      );
  }
}
class FollowMeHomeCard extends Component{
  render(){
    return(
      <Card>
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Follow Me Home"/>}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img src="images/foljmejhem.png" alt="följ mej hem" style={imageStyle}/>
          </div>
        </CardMedia>
        <CardText>
          Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
        </CardText>
        <CardActions>
          <a href="https://github.com/BennyCarlsson/my_portfolio" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
          <a href="http://bennycarlsson.com/foljmejhem/" target="_blank"><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
        </CardActions>
      </Card>
    )
  }
}
class BaraGodaNyheter extends Component{
  render(){
    return(
      <Card>
        <CardMedia
          overlay={<CardTitle style={titleStyle} title="Bara Goda Nyheter"/>}
        >
          <div className="paperImageClass" style={imageStyleDiv}>
            <img src="images/baragodanyheter.png" alt="Bara goda nyheter" style={imageStyle}/>
          </div>
        </CardMedia>
        <CardText>
          Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
        </CardText>
        <CardActions>
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
        <Card>
          <CardMedia
            overlay={<CardTitle style={titleStyle} title="STYGGS"/>}
          >
            <div className="paperImageClass" style={imageStyleDiv}>
              <img src="images/STYGGS.png" alt="styggs" style={imageStyle}/>
            </div>
          </CardMedia>
          <CardText>
            Android application made 2015 as a school project. Use the gps in your phone to make sure you and your friend gets safely home!
          </CardText>
          <CardActions>
            <a href="https://github.com/BennyCarlsson/my_portfolio" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> Github</a>
            <a href="http://bennycarlsson.com/foljmejhem/" target="_blank"><i className="fa fa-globe" aria-hidden="true"></i> Website</a>
          </CardActions>
        </Card>
      )
    }
  }
export default Projects;
