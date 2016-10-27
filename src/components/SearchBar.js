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
  showPage(){
    this.hideDropDown();
    this.props.showPage(true);
  }
  clearSearchBar(){
    this.refs.searchBar.value="";
  }
  render(){
    return(
        <div id="searchBarDiv">
          <div id="innerSearchBarDiv" onClick={this.handleClick.bind(this)}>
            <input ref="searchBar" key="searchBarKey" id="searchBar" onFocus={this.onFocus.bind(this)} type="text"/>
          </div>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">search</FontIcon>
          {this.props.dropDownState ? <DropDown showPage={this.showPage.bind(this)}/> : ""}
        </div>
    );
  }
}
export default SearchBar;
