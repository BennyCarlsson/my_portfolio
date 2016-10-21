import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import DropDown from './DropDown.js';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = {showDropDown:false};
  }
  onFocus(e){
    console.log(e);
    this.setState({showDropDown:true});
    //this.refs.searchBar.focus();
    //funkar inte för att dropdownen får focus?? nee nvm
  }
  handleClick(){
    this.refs.searchBar.focus();
  }
  render(){
    return(
        <div id="searchBarDiv" onClick={this.handleClick.bind(this)}>
          <input ref="searchBar" key="searchBarKey" id="searchBar" onFocus={this.onFocus.bind(this)} type="text"/>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">search</FontIcon>
          {this.state.showDropDown ? <DropDown/> : ""}
        </div>
    );
  }
}
export default SearchBar;
