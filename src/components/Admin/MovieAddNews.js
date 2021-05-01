import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import axios from "axios";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default class MovieAddNews extends Component {
    constructor() {
        super();
        this.state = {
            newsTitle: "",
            newsDetail: "",
            newsImage: "",
            newsDate: ""
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
            id:"",
            title:this.state.newsTitle,
            detail:this.state.newsDetail,
            image:this.state.newsImage,
            date:"1 พ.ค. 2021"
        };
    
        axios.post('http://localhost:3001/moviesNews',title).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'เพิ่มข่าวภาพยนต์สำเร็จ',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push('/anews');
        })
    }
    render() {
        return (
            <div>
                <Header />
                    <div className="container bg-light p-2">
                        <div class="container col-md-7 d-grid gap-2 d-md-flex justify-content-md-end p-0">
                                <Link class="btn btn-dark" to={"/anews"}><FontAwesomeIcon icon={faChevronLeft} /> กลับ</Link>
                        </div>
                        <div className="container col-md-7 border bg-light p-3 mt-2">
                            <h3>เพิ่มข่าวหนัง</h3>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <p>ชื่อเรื่อง</p>
                                    <input type="text" className="form-control" name="newsTitle" onChange={this.handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <p>เนื้อหาข่าว</p>
                                    <textarea className="form-control" rows="3" name="newsDetail" onChange={this.handleChange} />
                                </div>
                                <div className="mb-3">
                                    <p>รูปภาพ</p>
                                    <input type="text" className="form-control" name="newsImage" onChange={this.handleChange} />
                                </div>
                                <div class="d-grid gap-2"><button type="submit" className="btn btn-success btn-block"><FontAwesomeIcon icon={faPlus} /> เพิ่ม</button></div>
                            </form>
                        </div>
                    </div>
                    <Footer />    
            </div>
        )
    }
}
