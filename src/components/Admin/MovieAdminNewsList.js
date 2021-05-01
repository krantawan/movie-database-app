import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class MovieAdminNewsList extends Component {
    showNews() {
        return (
            this.props.news &&
            this.props.news.map(news => (
                <tr key={news.id}>
                    <th scope="row">{news.id}</th>
                    <td>{news.title}</td>
                    <td>
                        <Link type="button" className="btn btn-warning me-md-2" to={'admin/editnews/' + news.id}><FontAwesomeIcon icon={faEdit} /> แก้ไข</Link>
                        <button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteNews(news.id)}><FontAwesomeIcon icon={faTrashAlt} /> ลบ</button>
                    </td>
                </tr>
            ))
        );
    }

    render() {
        return (this.showNews());
    }
}
