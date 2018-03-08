import React, { Component } from "react"
import Menu from "./components/Menu.js"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

class Index extends Component {
  render() {
    return (
      <div id="app">
        <div id="content">
          <div ref="searchBarDivRef">
            <Menu />
          </div>
        </div>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Index />
      </MuiThemeProvider>
    )
  }
}
export default App
