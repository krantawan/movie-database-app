import './App.css'
import Home from "./containers/Home";
import About from "./containers/About";
import Movie from './containers/Movie';
import React, { Component } from 'react';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Admin from './containers/Admin';
import MovieAdd from './components/Admin/MovieAdd';
import MovieEdit from './components/Admin/MovieEdit';
import MovieNewsList from './components/Movie/MovieNewsList';
import MovieNewsPage from './components/Movie/MovieNewsPage';
import MovieAddNews from './components/Admin/MovieAddNews';
import MovieEditNews from './components/Admin/MovieEditNews';


class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/movie/:id" render={(props) => <Movie {...props} />} />
        <Route exact path="/news/" component={MovieNewsList} />
        <Route exact path="/news/:id" component={MovieNewsPage} />
        
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/anews" component={Admin} />
        <Route exact path="/admin/add" component={MovieAdd} />
        <Route exact path="/admin/addnews" component={MovieAddNews} />
        <Route exact path="/admin/edit/:id" component={MovieEdit} />
        <Route exact path="/admin/editnews/:id" component={MovieEditNews} />
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

