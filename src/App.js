import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import Menu from './components/Menu.js';
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
class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {showDropDown:false , showPage:null};
  }
  hideDropDown(){
    this.setState({showDropDown:false});
  }
  bodyClick(e){
    var source = e.target;
    var isInsideSearchBarDiv = false;
    while(source.parentNode){
      if(source === this.refs.searchBarDivRef){
        isInsideSearchBarDiv = true;
        break;
      }
      source = source.parentNode
    }
    if(!isInsideSearchBarDiv){
      this.setState({showDropDown:false});
    }
  }
  showDropDown(){
    this.setState({showDropDown:true});
  }
  showPage(bool){
    this.setState({showPage:bool});
  }
  resetPage(){
    if(this.state.showPage){
        this.setState({showPage:false});
    }
    this.refs.searchBarref.hidePage();
  }
  render() {
    return (
      <div id="app">
      <div id="content" onClick={this.bodyClick.bind(this)}>
        <GridList cols={12} style={styles.gridList}>
          <GridTile cols={2} rows={1}></GridTile>
          <GridTile cols={8} rows={1} style={styles.gridList}>
            <TitleLogo resetPage={this.resetPage.bind(this)} showPage={this.state.showPage}/>
            <div ref="searchBarDivRef">
            <Menu
              ref="searchBarref"
              dropDownState={this.state.showDropDown}
              showDropDown={this.showDropDown.bind(this)}
              hideDropDown={this.hideDropDown.bind(this)}
              showingPageState={this.state.showingPage}
              showPage={this.showPage.bind(this)}
            />
            </div>
          </GridTile>
          <GridTile cols={2} rows={1}></GridTile>
        </GridList>
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
