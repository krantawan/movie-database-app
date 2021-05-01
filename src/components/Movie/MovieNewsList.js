import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import Header from '../Header';
import { Link } from 'react-router-dom';

export default class Movieallnews extends Component {
    constructor(){
        super();
        this.state = {
            movieNews : []
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3001/moviesNews?_order=desc").then( res => {
        this.setState({ movieNews : res.data});
      });
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container bg-white">
                    <div className="pt-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">ข่าวทั้งหมด</li>
                            </ol>
                        </nav>
                    </div>
                    <h2>ข่าวทั้งหมด</h2>
                    <div class="card-deck">
                            <div className="row">
                            {this.state.movieNews.map((res, index) => (
                                <div class="col-sm-4">
                                    <div class="card mb-2 mt-2" style={{"height":"300px"}} key={index}>
                                        <img style={{"height":"150px"}}class="card-img-top img-fluid" src={res.image} width="400" alt="poster-news" />
                                        <div class="card-body">
                                            <Link to={'news/'+ res.id}><h5 class="card-title">{res.title}</h5></Link>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">{res.date}</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <br></br>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
