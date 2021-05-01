import React, { Component } from 'react'
import logo from "../../assets/images/logo.png"
import Footer from "../Footer";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Movienewspage extends Component {
    constructor() {
        super();
        this.state = {
            movieNewsPage: ""
        }
    }
    componentDidMount() {
        const movienewsId = this.props.match.params.id;
        if (movienewsId) {
            this.findNewsById(movienewsId);
        }
    }

    findNewsById = (movienewsId) => {
        axios.get('http://localhost:3001/moviesNews/' + movienewsId).then(
            res => {
                this.setState(res.data);
                console.log(res.data)
            }
        )
    }

    render() {
        const { title, image, detail, date } = this.state;
        return (
            <div className="h-100">
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

                <div className="container bg-white h-100 pt-2">
                    <div className="pt-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item"><Link to="/news">ข่าว</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                    <h2>{title}</h2>
                    <img src={image} class="img-fluid rounded mx-auto d-block" alt="" />
                    <hr />
                    <div style={{ "textIndent": "50px" }}><h5>{detail}</h5></div>
                    <hr />
                    {date}
                    <div style={{ "height": "300px" }}></div>
                </div>
                <Footer />
            </div>
        )
    }
}
