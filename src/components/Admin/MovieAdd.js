import React, { Component } from 'react'
import Footer from '../../components/Footer';
import axios from "axios";
import Header from '../../components/admin/Header';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';

class MovieAdd extends Component { 
    constructor() {
        super();
        this.state = {
            movieTitle: '',
            moviePoster: '',
            movieOverview: '',
            movieYoutube:'',
            movieDirector:'',
            movieWriters:'',
            movieStar:'',
            movieVote:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (event) {
        const value = event.target.name;
        this.setState({[value] : event.target.value});
    }

    handleSubmit = event => {
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
    
        axios.post('http://localhost:3001/movies',title).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'เพิ่มภาพยนต์สำเร็จ',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push('/admin');
        })
    }




    render() {
        return (
            <div>
                <Header/>
                    <div className="container col-md-3 border bg-light p-3 mt-2">
                        <h3>เพิ่มหนัง</h3>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <p>ชื่อเรื่อง</p>
                                <input type="text" className="form-control" name="movieTitle" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <p>เรื่องย่อ</p>
                                <textarea className="form-control" rows="3" name="movieOverview" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <p>ตัวอย่างหนัง (Youtube)</p>
                                <input type="text" className="form-control" name="movieYoutube" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <p>ผู้กำกับ</p>
                                <input type="text" className="form-control" name="movieDirector" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <p>ผู้เขียนบท</p>
                                <input type="text" className="form-control" name="movieWriters" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <p>นักแสดง</p>
                                <textarea className="form-control" rows="3" name="movieStar" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <p>คะแนน</p>
                                <input type="text" className="form-control" name="movieVote" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <p>รูปภาพ</p>
                                <input type="text" className="form-control" name="moviePoster" onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-success btn-block"><FontAwesomeIcon icon={faPlus} /> เพิ่ม</button>
                        </form>
                    </div>

                <Footer />
            </div>
        )
    }
}

export default MovieAdd;