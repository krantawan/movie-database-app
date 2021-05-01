import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieAdminList extends Component {
    showMovies() {
        return (
            this.props.movies &&
            this.props.movies.map(movie => (
                <tr key={movie.id}>
                    <th scope="row">{movie.id}</th>
                    <td>{movie.title}</td>
                    <td>
                        <Link type="button" className="btn btn-warning mr-1" to={'admin/edit/' + movie.id}>แก้ไข</Link>
                        <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteMovie(movie.id)}>ลบ</button>
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