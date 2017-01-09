import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import Menu from './components/Menu.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

class Index extends Component{
  render() {
    return (
      <div id="app">
      <div id="content">
            <div ref="searchBarDivRef">
            <Menu/>
            </div>
      </div>
      </div>
    );
  }
}
class App extends Component {
  getChildContext() {
    injectTapEventPlugin();
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render(){
    return(
      <Index/>
    );
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
