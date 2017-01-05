import React, {Component} from 'react';
import DropDown from './DropDown.js';
import TitleLogo from './TitleLogo.js';

class Menu extends Component{
  constructor(props) {
    super(props);
    this.state = {showPage:null};
  }
  showPageOrNot(bool){
    this.setState({showPage:bool});
  }
  resetPage(){
    this.refs.menuOptionsRef.handleChange(0);
    if(this.state.showPage){
        this.setState({showPage:false});
    }
  }
  showPage(){
    this.showPageOrNot(true);
  }
  render(){
    return(
      <div>
        <TitleLogo resetPage={this.resetPage.bind(this)} showPage={this.state.showPage}/>
        <div id="menuDiv">
          <DropDown ref="menuOptionsRef"
            showPage={this.showPage.bind(this)}
            resetPage={this.resetPage.bind(this)}
          />
        </div>
      </div>
    )
  }
}
export default Menu;
