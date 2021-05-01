import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-white p-5">
                <div className="text-center title text-uppercase">
                    <small>
                        <span className="text-success">MOVIE DATABASE REACT</span> <span className="text-mute">| KRANTAWAN@KU.TH |</span> <Link to="/admin"><span className="text-danger">ADMIN_CP</span></Link>
                    </small>
                </div>
            </div>
        )
    }
}
