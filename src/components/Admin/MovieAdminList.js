import React, { Component } from "react";
import { Link } from "react-router-dom";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MovieAdminList extends Component {
    showMovies() {
        return (
            this.props.movies &&
            this.props.movies.map(movie => (
                <tr key={movie.id}>
                    <th scope="row">{movie.id}</th>
                    <td>{movie.title}</td>
                    <td>
                        <Link type="button" className="btn btn-warning me-md-2" to={'admin/edit/' + movie.id}><FontAwesomeIcon icon={faEdit} /> แก้ไข</Link>
                        <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteMovie(movie.id)}><FontAwesomeIcon icon={faTrashAlt} /> ลบ</button>
                    </td>
                </tr>
            ))
        );
    }

    render() {
        return (this.showMovies());
    }

}


export default MovieAdminList;