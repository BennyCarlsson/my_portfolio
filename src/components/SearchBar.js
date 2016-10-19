import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import DropDown from './DropDown.js';

class SearchBar extends Component{
  handleClick(){
    this.refs.searchBar.focus();
  }
  render(){
    return(
        <div id="searchBarDiv" onClick={this.handleClick.bind(this)}>
          <input ref="searchBar" id="searchBar" type="text"/>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">menu</FontIcon>
          <DropDown/>
        </div>
    );
  }
}
export default SearchBar;
