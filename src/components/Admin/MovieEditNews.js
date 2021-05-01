import React, { Component } from 'react'
import logo from "../../assets/images/logo.png"
import Footer from '../Footer';
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class MovieEditNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsTitle: "",
            newsDetail: "",
            newsImage: "",
            newsDate: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.name;
        this.setState({ [value]: event.target.value });
    }

    handleSubmit = event => {
        const newsId = this.props.match.params.id;
        event.preventDefault();

        const title = {
            id: "",
            title: this.state.newsTitle,
            detail: this.state.newsDetail,
            image: this.state.newsImage,
            date: this.state.newsDate
        };

        axios.put('http://localhost:3001/moviesNews/' + newsId, title).then(res => {
            console.log(res.data);
        });

        Swal.fire({
            title: 'คุณแน่ใจหรือไม่ ?',
            text: "คุณจะไม่สามารถย้อนกลับมาได้อีก!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'แก้ไข!',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'แก้ไข!',
                    'ข่าวภาพยนต์ของคุณแก้ไขสำเร็จ.',
                    'success'
                )
            }
            this.props.history.push('/anews');
        })
    }

    componentDidMount() {
        const newsId = this.props.match.params.id;
        if (newsId) {
            this.findMovieById(newsId);
        }
    }
    findMovieById = (newsId) => {
        axios.get('http://localhost:3001/moviesNews/' + newsId).then(
            res => {
                this.setState({ newsTitle: res.data.title, newsDetail: res.data.detail, newsImage: res.data.image, newsDate: res.data.date });
                console.log(res.data)
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <div className="bg-dark">
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
                                        <Link className="nav-link text-mute" to="/admin">รายการหนัง</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/anews">รายการข่าว</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/admin/add">เพิ่มหนัง</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/admin/addnews">เพิ่มข่าว</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/">ดูเว็บไซต์</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container bg-light p-2">
                    <div class="container col-md-7 d-grid gap-2 d-md-flex justify-content-md-end p-0">
                        <Link class="btn btn-dark" to={"/anews"}><FontAwesomeIcon icon={faChevronLeft} /> กลับ</Link>
                    </div>
                    <div className="container col-md-7 border bg-light p-3 mt-2">
                        <h3>แก้ไขข่าวหนัง</h3>
                        <hr />
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <p>ชื่อเรื่อง</p>
                                <input type="text" className="form-control" name="newsTitle" onChange={this.handleChange} value={this.state.newsTitle} />
                            </div>
                            <div className="mb-3">
                                <p>เนื้อหาข่าว</p>
                                <textarea className="form-control" rows="10" name="newsDetail" onChange={this.handleChange} value={this.state.newsDetail} />
                            </div>
                            <div className="mb-3">
                                <p>วันที่</p>
                                <input type="text" className="form-control" name="newsDate" onChange={this.handleChange} value={this.state.newsDate} />
                            </div>
                            <div className="mb-3">
                                <p>รูปภาพ</p>
                                <input type="text" className="form-control" name="newsImage" onChange={this.handleChange} value={this.state.newsImage} />
                            </div>
                            <div class="d-grid gap-2"><button type="submit" className="btn btn-warning">แก้ไข</button></div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
