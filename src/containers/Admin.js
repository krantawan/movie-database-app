import React, { Component } from "react";
import axios from "axios";
import MovieAdminList from "../components/Admin/MovieAdminList";
import Swal from 'sweetalert2';
import Header from "../components/Header";
import MovieAdminNewsList from "../components/Admin/MovieAdminNewsList";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {movies : "" , movieNews : ""};
        this.deleteMovie = this.deleteMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
        console.log(this.state)
    }
    
    componentDidMount() {
        axios.get("http://localhost:3001/movies").then( res => {
          this.setState({ movies : res.data});
        });
        axios.get("http://localhost:3001/moviesNews").then( res => {
          this.setState({ movieNews : res.data});
        });
    }

    deleteMovie(id) {
        if(id) {
            Swal.fire({
                title: 'คุณแน่ใจหรือไม่ ?',
                text: "คุณจะไม่สามารถย้อนกลับมาได้อีก!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ลบ!',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'ลบ!',
                        'ภาพยนต์ของคุณลบสำเร็จ.',
                        'success'
                    )
                    axios.delete("http://localhost:3001/movies/" + id).then(res => {
                    axios.get("http://localhost:3001/movies").then(
                        res => {
                            this.setState({movies : res.data});
                        }
                    )
                    })
                }
            })
        }
    }

    editMovie(id) {
        axios.get("http://localhost:3001/movies" + id ).then( res => {
          this.setState({ movies : res.data});
        });
        
    }

    render () {
        return(
            <div>
                <Header/>
                <div className="container border bg-light p-2">
                    <hr></hr>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ลำดับ</th>
                                <th scope="col">ชื่อเรื่อง</th>
                                <th scope="col">จัดการ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            window.location.pathname === "/admin" ? 
                            <MovieAdminList movies={this.state.movies} onEditMovie={this.editMovie} onDeleteMovie={this.deleteMovie}/>
                            :
                            window.location.pathname === "/anews" ? 
                            <MovieAdminNewsList news={this.state.movieNews} /> : ""
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Admin;