import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MovieMain extends Component {
    render() {
        return (
            <div>
                <hr />
                <h4>MOVIE LASTEST</h4>
                <div className="row">
                    {this.props.movies && this.props.movies.map(res => (
                    <div className="col-md-3 col-sm-6 pb-2 moive-container" key={res.id}>
                        <Link to={"movie/" + res.id} >
                            <img className="img-fluid rounded movie-img" style={{height:"390px",width:"100%"}} alt="" src={res.poster} />
                            <div className="movie-text-middle text-dark">
                                <h4 className="mt-2">{res.title}</h4>
                                <button className="btn btn-block btn-dark">ดูรายละเอียด</button>
                            </div>
                        </Link>
                    </div>
                    ))} 
                </div>
                <hr />
            </div>
        )
    }
}
