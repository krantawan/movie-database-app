import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import MovieRankList from './MovieRankList';
import rank from "../../assets/images/badge-1.png";
import ranktag from "../../assets/images/rank-tag.png";
import slide1 from '../../assets/images/slide/1.png';
import slide2 from '../../assets/images/slide/2.png';
import slide3 from '../../assets/images/slide/3.png';



export default class MovieRanking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/movies?_sort=vote_average&_order=desc&_limit=1").then(res => {
            this.setState({ movies:res.data });
        });
    }

    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 rounded" src={slide1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 rounded" src={slide2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 rounded" src={slide3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="clearfix"></div>
                <div className="ranking-display">
                    <div className="ranking-tag ">
                        <div className="ranking-tag-first"><img alt="" src={ranktag} /></div>
                    </div>
                    <div className="ranking-top-movie rank-poster">
                        <div className="ranking-tag ">
                            <img style={{ marginTop: "20%" }} alt="" src={rank} />
                            <div className="ranking-score badge bg-light text-dark">{ this.state.movies.map(res => res.vote_average)}</div>
                        </div>
                        <Link to={ "movie/" + this.state.movies.map(res => res.id)}><img className="rounded" alt="" width="350" height="555" src={ this.state.movies.map(res => res.poster)} /></Link>
                    </div>
                    <MovieRankList />
                </div>
            </div>
        )
    }
}
