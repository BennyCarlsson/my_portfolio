import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import DropDown from './DropDown.js';

class SearchBar extends Component{
  onFocus(){
    this.props.showDropDown();
  }
  hideDropDown(){
    this.props.hideDropDown();
  }
  handleClick(){
    this.refs.searchBar.focus();
    this.props.showDropDown();
  }
  render(){
    return(
        <div id="searchBarDiv">
          <div id="innerSearchBarDiv" onClick={this.handleClick.bind(this)}>
            <input ref="searchBar" key="searchBarKey" id="searchBar" onFocus={this.onFocus.bind(this)} type="text"/>
          </div>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">search</FontIcon>
          {this.props.dropDownState ? <DropDown hideDropDown={this.hideDropDown.bind(this)}/> : ""}
        </div>
    );
  }
}
export default SearchBar;
