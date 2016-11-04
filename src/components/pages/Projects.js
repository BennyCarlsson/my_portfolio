import React,{Component} from "react";
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const style = {
  height: 250,
  width: "30%",
  margin: "1%",
  textAlign: 'center',
  display: 'inline-block',
};

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
            <FollowMeHomeCard/>
          </Paper>
        </div>
        <div id="projectDiv3" className="projectDiv">
          <Paper style={style} zDepth={3} className="projectPaperDiv">
            <FollowMeHomeCard/>
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
          overlay={<CardTitle title="Follow Me Home" subtitle="Android app" />}
        >
          <img src="images/foljmejhem.png" />
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        </CardText>
        <CardActions>
        <IconButton>
          <ActionHome />
        </IconButton>

          <a href="https://github.com/BennyCarlsson/my_portfolio"><i className="fa fa-github" aria-hidden="true"></i></a>

        </CardActions>
      </Card>
    )
  }
}
export default Projects;
