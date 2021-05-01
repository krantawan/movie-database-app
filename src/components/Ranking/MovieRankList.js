import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import medal1 from "../../assets/rank/medal-1.png";
import medal2 from "../../assets/rank/medal-2.png";
import medal3 from "../../assets/rank/medal-3.png";

export default class MovieRankList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/movies?&_sort=vote_average&_order=desc&_end=8").then(res => {
            this.setState({ movies: res.data });
        });
    }

    render() {
        return (
            <div className="ranking-list">
                <ul className="row">
                    {this.state.movies.map((res, index) => (
                        <li className="col-md-3" key={index}>
                            <div className="rank-poster">
                                <div className="ranking-tag">
                                    <div className="ranking-score text-dark m-2">
                                        {(() => {
                                            if (index + 1 === 1) {
                                                return <img src={medal1} alt="" />
                                            } else if (index + 1 === 2) {
                                                return <img src={medal2} alt="" />
                                            } else if (index + 1 === 3) {
                                                return <img src={medal3} alt="" />
                                            } else {
                                                return <div className="badge bg-light text-dark"> {index + 1} | {res.vote_average}</div>
                                            }
                                        })()}
                                    </div>
                                </div>
                                <Link to={"movie/" + res.id}><img className="rounded" alt="" width="100%" height="300" src={res.poster} /></Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
