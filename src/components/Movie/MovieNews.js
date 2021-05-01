import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default class MovieNews extends Component {
    render() {
        return (
            <div>
                <h4>MOVIE UPDATE</h4>
                <div className="movie-update">
                    <div className="card-group">
                        {this.props.news && this.props.news.map(res => (
                            <div className="card" key={res.id}>
                                <img style={{"height":"150px"}}className="card-img-top img-fluid" src={res.image} width="400" alt="poster-news" />
                                <div className="card-body">
                                    <Link to={'news/'+ res.id}><h5 className="card-title">{res.title}</h5></Link>
                                </div>
                                <div className="card-footer"><small className="text-muted">{res.date}</small></div>
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="col-md-12 p-1">
                    <Link className="btn btn-outline-dark float-right" to={"news"}>ดูทั้งหมด <FontAwesomeIcon icon={faAngleRight} /></Link>
                    </div><br/>
                <hr />
            </div>
        )
    }
}
