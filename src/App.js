import './App.css'
import Home from "./containers/Home";
import About from "./containers/About";
import Movie from './containers/Movie';
import React, { Component } from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";


class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/movie/:id" component={Movie} />
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

