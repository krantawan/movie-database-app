import React, { Component } from 'react'
import Header from "../Header";
import Footer from "../Footer";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Movienewspage extends Component {
    constructor(){
        super();
        this.state = {
            movieNewsPage : ""
        }
    }
    componentDidMount() {
        const movienewsId = this.props.match.params.id;
        if(movienewsId){
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
        const {title , image , detail , date} = this.state;
        return (
            <div className="h-100">
                <Header />
                    <div className="container bg-white h-100">
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
                        <img src={image} class="img-fluid" alt=""/>
                        <hr />
                        <div style={{"textIndent":"50px"}}>{detail}</div>
                        <hr />
                        {date}
                    </div>
                <Footer />
            </div>
        )
    }
}
