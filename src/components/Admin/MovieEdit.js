import axios from "axios";
import React, { Component } from "react";
import Swal from 'sweetalert2';
import Header from '../Header';
import Footer from '../Footer';


class MovieEdit extends Component {

    constructor(props) {
        super(props);
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
    
        axios.put('http://localhost:3001/movies/'+ movieId , title).then(res => {
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
        if(movieId){
            this.findMovieById(movieId);
        }
    }

    findMovieById = (movieId) => {
        axios.get('http://localhost:3001/movies/' + movieId).then(
            res => {
                this.setState({movieTitle: res.data.title , movieOverview: res.data.overview ,moviePoster: res.data.poster , movieYoutube: res.data.youtube, movieDirector: res.data.director, movieWriters: res.data.writers, movieStar: res.data.star, movieVote: res.data.vote_average});
                console.log(res.data)
            }
        )
    }


    render() {
        //const {title , poster , overview} = this.state;
        return (
            <div>
                <Header/>
                    <div className="container col-md-4 border bg-light p-3 mt-2">
                        <h3>แก้ไข</h3>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <p>ชื่อเรื่อง</p>
                                <input type="text" className="form-control" name="movieTitle" onChange={this.handleChange} value={this.state.movieTitle} />
                            </div>
                            <div className="form-group">
                                <p>เรื่องย่อ</p>
                                <textarea className="form-control" rows="3" name="movieOverview" onChange={this.handleChange} value={this.state.movieOverview} />
                            </div>
                            <div className="form-group">
                                <p>ตัวอย่างหนัง (Youtube)</p>
                                <input type="text" className="form-control" name="movieYoutube" onChange={this.handleChange} value={this.state.movieYoutube} />
                            </div>
                            <div className="form-group">
                                <p>ผู้กำกับ</p>
                                <input type="text" className="form-control" name="movieDirector" onChange={this.handleChange} value={this.state.movieDirector} />
                            </div>
                            <div className="form-group">
                                <p>ผู้เขียนบท</p>
                                <input type="text" className="form-control" name="movieWriters" onChange={this.handleChange} value={this.state.movieWriters} />
                            </div>
                            <div className="form-group">
                                <p>นักแสดง</p>
                                <textarea className="form-control" rows="3" name="movieStar" onChange={this.handleChange} value={this.state.movieStar} />
                            </div>
                            <div className="form-group">
                                <p>คะแนน</p>
                                <input type="text" className="form-control" name="movieVote" onChange={this.handleChange} value={this.state.movieVote} />
                            </div>
                            <div className="form-group">
                                <p>รูปภาพ</p>
                                <input type="text" className="form-control" name="moviePoster" onChange={this.handleChange} value={this.state.moviePoster}/>
                            </div>
                            <button type="submit" className="btn btn-warning btn-block">แก้ไข</button>
                        </form>
                    </div>

                <Footer />
            </div>
        )
    }
}

export default MovieEdit;