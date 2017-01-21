import React,{Component} from "react";
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

class About extends Component{
  constructor(props) {
    super(props);
    this.state = {secondsSinceMyBirth:0, yearsSinceMyBirth:0};
  }
  setTime(){
    var d = new Date();
    var seconds = Math.round(d.getTime() / 1000);
    this.setState({secondsSinceMyBirth:seconds});
  }
  componentWillMount(){
  	this.setTime();
  }
  componentDidMount(){
  	 window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
  }
  render(){
      return(
        <div id="aboutContentDiv">
          <Paper id="paperContent" zDepth={2}>
            <Paper id='paperAvatar' zDepth={4} circle={true}>
            <Avatar id="avatarImage" src="images/BennyCarlsson.jpg"/>
            </Paper>
            <div id="aboutTextDiv">
            <h2>Hello World!</h2>
              About {this.state.secondsSinceMyBirth} seconds (~{this.state.yearsSinceMyBirth})
              ago I was born in a small town called Nässjö in Sweden
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis mi quis diam tincidunt, a imperdiet elit ullamcorper. Suspendisse ipsum eros, pulvinar id congue sed, consectetur non diam. Integer nunc urna, iaculis vel lacinia ac, rhoncus et lacus. Morbi id lobortis ligula. Ut pharetra lectus vel semper fermentum. Curabitur ullamcorper diam magna, feugiat aliquet nulla euismod quis. Phasellus felis metus, condimentum sit amet nisl id, laoreet interdum nunc. Vestibulum lectus sapien, congue a pharetra vitae, accumsan ac dolor. Morbi rhoncus interdum tristique. Aenean consectetur lectus nulla, ut suscipit neque vehicula sed.
              <Chips/>
              <SocialMediaPhone/>
            </div>
            <SocialMediaDesktop/>
          </Paper>
        </div>
      );
  }
}
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
class Chips extends Component {
  render() {
    return (
      <div id="listAbout">
      <h3>Kompetenser</h3>
      <div style={styles.wrapper}>
        <Chip style={styles.chip}>Java</Chip>
        <Chip style={styles.chip}>C#</Chip>
        <Chip style={styles.chip}>JavaScript</Chip>
        <Chip style={styles.chip}>HTML5</Chip>
        <Chip style={styles.chip}>CSS3</Chip>
        <Chip style={styles.chip}>PHP</Chip>
        <Chip style={styles.chip}>MySql</Chip>
        <Chip style={styles.chip}>ReactJS</Chip>
        <Chip style={styles.chip}>Scrum</Chip>
      </div>
      </div>
    );
  }
}
class SocialMediaPhone extends Component{
  render() {
    return (
      <span className="mobileOnly">
        <SocialMedia/>
      </span>
    );
  }
}
class SocialMediaDesktop extends Component{
  render() {
    return (
      <span className="desktopOnly">
        <SocialMedia/>
      </span>
    );
  }
}
class SocialMedia extends Component {
  render() {
    return (
      <div id="socialMediaAbout">
        <a href="https://www.linkedin.com/in/benny-carlsson-620226ba" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href="https://twitter.com/Benny_Carlsson" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
        <a href="https://github.com/BennyCarlsson" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
      </div>
    );
  }
}
export default About;
