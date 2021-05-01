import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MovieAdminNewsList extends Component {
    showNews() {
        return (
            this.props.news &&
            this.props.news.map(news => (
                <tr key={news.id}>
                    <th scope="row">{news.id}</th>
                    <td>{news.title}</td>
                    <td>
                        <Link type="button" className="btn btn-warning mr-1" to={""}>แก้ไข</Link>
                        <button type="button" className="btn btn-danger" onClick={""}>ลบ</button>
                    </td>
                </tr>
            ))
        );
    }

    render() {
        return (this.showNews());
    }
}
