import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"


export default class Header extends Component {
    render() {
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
            </div>
        )
    }
}
