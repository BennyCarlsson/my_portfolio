import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import DropDown from './DropDown.js';

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = {showDropDown:false};
  }
  onFocus(){
    this.setState({showDropDown:true});
  }
  onBlur(){
    this.setState({showDropDown:false});
  }
  handleClick(){
    this.refs.searchBar.focus();
  }
  render(){
    return(
        <div id="searchBarDiv" onClick={this.handleClick.bind(this)}>
          <input ref="searchBar" key="searchBarKey" id="searchBar" onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} type="text"/>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">search</FontIcon>
          {this.state.showDropDown ? <DropDown/> : ""}
        </div>
    );
  }
}
export default SearchBar;
