import axios from "axios";
import React, { Component } from "react";
import Swal from 'sweetalert2';
import logo from "../../assets/images/logo.png"
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MovieEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieTitle: '',
            moviePoster: '',
            movieOverview: '',
            movieYoutube: '',
            movieDirector: '',
            movieWriters: '',
            movieStar: '',
            movieVote: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.name;
        this.setState({ [value]: event.target.value });
    }

    handleSubmit = event => {
        const movieId = this.props.match.params.id;
        event.preventDefault();

        const title = {
            id: '',
            title: this.state.movieTitle,
            poster: this.state.moviePoster,
            overview: this.state.movieOverview,
            youtube: this.state.movieYoutube,
            director: this.state.movieDirector,
            writers: this.state.movieWriters,
            star: this.state.movieStar,
            vote_average: this.state.movieVote
        };

        axios.put('http://localhost:3001/movies/' + movieId, title).then(res => {
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
                    'ภาพยนต์ของคุณแก้ไขสำเร็จ.',
                    'success'
                )
            }
            this.props.history.push('/admin');
        })
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;
        if (movieId) {
            this.findMovieById(movieId);
        }
    }

    findMovieById = (movieId) => {
        axios.get('http://localhost:3001/movies/' + movieId).then(
            res => {
                this.setState({ movieTitle: res.data.title, movieOverview: res.data.overview, moviePoster: res.data.poster, movieYoutube: res.data.youtube, movieDirector: res.data.director, movieWriters: res.data.writers, movieStar: res.data.star, movieVote: res.data.vote_average });
                console.log(res.data)
            }
        )
    }


    render() {
        //const {title , poster , overview} = this.state;
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
                                        <Link className="nav-link text-mute" to="/admin"><FontAwesomeIcon icon={faListAlt} /> รายการหนัง</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/anews"><FontAwesomeIcon icon={faListAlt} /> รายการข่าว</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/admin/add"><FontAwesomeIcon icon={faPlusSquare} /> เพิ่มหนัง</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/admin/addnews"><FontAwesomeIcon icon={faPlusSquare} /> เพิ่มข่าว</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-mute" to="/"><FontAwesomeIcon icon={faEye} /> ดูเว็บไซต์</Link>
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
                        <h3>แก้ไข</h3>
                        <hr />
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <p>ชื่อเรื่อง</p>
                                <input type="text" className="form-control" name="movieTitle" onChange={this.handleChange} value={this.state.movieTitle} />
                            </div>
                            <div className="mb-3">
                                <p>เรื่องย่อ</p>
                                <textarea className="form-control" rows="3" name="movieOverview" onChange={this.handleChange} value={this.state.movieOverview} />
                            </div>
                            <div className="mb-3">
                                <p>ตัวอย่างหนัง (Youtube)</p>
                                <input type="text" className="form-control" name="movieYoutube" onChange={this.handleChange} value={this.state.movieYoutube} />
                            </div>
                            <div className="mb-3">
                                <p>ผู้กำกับ</p>
                                <input type="text" className="form-control" name="movieDirector" onChange={this.handleChange} value={this.state.movieDirector} />
                            </div>
                            <div className="mb-3">
                                <p>ผู้เขียนบท</p>
                                <input type="text" className="form-control" name="movieWriters" onChange={this.handleChange} value={this.state.movieWriters} />
                            </div>
                            <div className="mb-3">
                                <p>นักแสดง</p>
                                <textarea className="form-control" rows="3" name="movieStar" onChange={this.handleChange} value={this.state.movieStar} />
                            </div>
                            <div className="mb-3">
                                <p>คะแนน</p>
                                <input type="text" className="form-control" name="movieVote" onChange={this.handleChange} value={this.state.movieVote} />
                            </div>
                            <div className="mb-3">
                                <p>รูปภาพ</p>
                                <input type="text" className="form-control" name="moviePoster" onChange={this.handleChange} value={this.state.moviePoster} />
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

export default MovieEdit;