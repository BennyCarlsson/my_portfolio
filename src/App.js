import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import SearchBar from './components/SearchBar.js';
import TitleLogo from './components/TitleLogo.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    height: '100vh',
  },
};
class App extends Component {
  getChildContext() {
    injectTapEventPlugin();
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    return (
      <div id="app">
      <div id="content">
        <GridList cols={12} style={styles.gridList}>
          <GridTile cols={2} rows={1}></GridTile>
          <GridTile cols={8} rows={1} style={styles.gridList}>
            <TitleLogo/>
            <SearchBar/>
          </GridTile>
          <GridTile cols={2} rows={1}></GridTile>
        </GridList>
      </div>
      </div>
    );
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
