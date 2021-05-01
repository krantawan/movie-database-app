import './App.css'
import Home from "./containers/Home";
import React, { Component } from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";


class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )
  }
  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;

