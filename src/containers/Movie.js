import React, { Component } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: "" };
    }

    componentDidMount() {
        const { match } = this.props;
        axios.get("http://localhost:3001/movies/" + match.params.id).then(res => {
            this.setState(res.data);
        });
    }

    render() {
        const { title, poster, overview, youtube, director, writers, star, vote_average } = this.state;
        return (
            <div>
                <div>
                    <div className="bg-white">
                        <div className="container p-2">
                            <img alt="logo" src={logo} style={{ "height": "28px" }}></img>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light sticky-top p-1 border-bottom bg-light">
                        <div className="container p-0">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse font-weight-bold" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark" to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/news">ข่าวหนัง</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/about">เกี่ยวกับ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container bg-white">
                    <br />
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item">Movie</li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-10 pt-3 bg-light border-top border-bottom">
                            <h3>{title}</h3></div>
                        <div className="col-md-2 bg-light border-start border-top border-bottom text-center p-3">
                            <h4>{vote_average} / 10</h4>
                        </div>

                        <div className="col-md-4 mt-2">
                            <img className="img-fluid img-thumbnail" alt="" src={poster} />
                        </div>
                        <div className="col-md-8 mt-2">
                            <blockquote className="blockquote bg-light p-2 rounded border">
                            <h2>เรื่องย่อ</h2><hr/>
                                <p className="mb-2">{overview}</p>
                                <br></br>
                                <footer className="blockquote-footer">เรื่องย่อ โดย <cite title="Source Title">Imdb</cite></footer>
                            </blockquote>
                        </div>
                        <div className="col-md-12"><hr /></div>
                        <div className="col-md-4">
                            <div className="bg-light p-2 rounded border">
                                <h3>รายละเอียด</h3>
                                <hr/>
                                <p><b>[ผู้กำกับการแสดง]</b></p><p>{director}</p>
                                <p><b>[ผู้เขียนบท]</b></p><p>{writers}</p>
                                <p><b>[นักแสดง]</b></p><p>{star}</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <iframe width="100%" height="450" src={"https://www.youtube.com/embed/" + youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Movie;