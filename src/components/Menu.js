import React, {Component} from 'react';
import DropDown from './DropDown.js';

class Menu extends Component{
  showPage(){
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
      </div>
    )
  }
}
export default Menu;
