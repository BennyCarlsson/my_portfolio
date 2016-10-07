import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';

class SearchBar extends Component{
  render(){
    return(
        <div id="searchBarDiv">
          <input id="searchBar" type="text"/>
          <FontIcon className="material-icons" id="searchBarHamburgerMenuIcon">menu</FontIcon>
        </div>
    );
  }
}
export default SearchBar;
