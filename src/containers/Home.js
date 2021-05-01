import React, { Component } from 'react'
import axios from 'axios';
import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieMain from '../components/Movie/MovieMain';
import MovieRanking from '../components/Ranking/MovieRanking'
import MovieNews from '../components/Movie/MovieNews';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {movies : "" , movieNews : ""};
    }

    componentDidMount() {
        axios.get("http://localhost:3001/movies").then( res => {
          this.setState({ movies : res.data});
        });
        axios.get("http://localhost:3001/moviesNews?_limit=4&_order=desc").then( res => {
          this.setState({ movieNews : res.data});
        });
    }

    render() {
        return (
            <div>
                <Header />
                    <div className="container p-1 bg-white border-top-0">
                        <MovieRanking />
                        <MovieMain movies={this.state.movies}/>
                        <MovieNews news={this.state.movieNews}/>
                    </div>
                <Footer />
            </div>
        )
    }
}
