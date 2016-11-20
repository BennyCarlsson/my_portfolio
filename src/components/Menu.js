import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import DropDown from './DropDown.js';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

class Menu extends Component{
  constructor(props){
    super(props);
      this.state = {showThisPage:""};
  }
  showPage(page){
    this.setState({showThisPage:page});
    this.props.showPage(true);
  }
  hidePage(){
    this.setState({showThisPage:""});
  }
  render(){
    return(
      <div>
        <div id="menuDiv">
          <DropDown showPage={this.showPage.bind(this)}/>
        </div>
        {this.state.showThisPage === "About"? <About/>:""}
        {this.state.showThisPage === "Projects"? <Projects/>:""}
        {this.state.showThisPage === "Contact"? <Contact/>:""}
      </div>
    )
  }
}
export default Menu;
