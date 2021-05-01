import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {movies : ""};
    }

    componentDidMount() {
        const { match } = this.props;
        axios.get("http://localhost:3001/movies/" + match.params.id).then( res => {
          this.setState(res.data);
        });
    }

    render() {  
        const {title , poster , overview , youtube , director , writers ,star ,vote_average} = this.state;
        return (
            <div>
                <Header />
                <div className="container bg-white">
                    <br/>
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
                            <h2>"เรื่องย่อ"</h2>
                            <blockquote className="blockquote">
                                <p className="mb-2">{overview}</p>
                                <br></br>
                                <footer className="blockquote-footer">เรื่องย่อ โดย <cite title="Source Title">Imdb</cite></footer>
                            </blockquote>
                        </div>
                        <div className="col-md-12"><hr /></div>
                        <div className="col-md-4">
                            <h3>รายละเอียด</h3>
                            <p><b>[ผู้กำกับการแสดง]</b></p><p>{director}</p>
                            <p><b>[ผู้เขียนบท]</b></p><p>{writers}</p>
                            <p><b>[นักแสดง]</b></p><p>{star}</p>
                        </div>
                        <div className="col-md-8">
                        <iframe width="100%" height="450" src={"https://www.youtube.com/embed/"+ youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Movie;