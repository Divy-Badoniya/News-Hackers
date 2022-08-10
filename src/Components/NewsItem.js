import React, { Component } from 'react'
import './newsItem.css'

export class NewsItem extends Component {

    render() {
        let defurl='https://i0.wp.com/python.gotrained.com/wp-content/uploads/2019/08/news-api.jpg?fit=200%2C200&ssl=1';
        let {title, description, imageUrl, url} = this.props;
        return (
            <div className="grid md-4 my-3">
                <div className="card">
                    <img src={imageUrl!=null ? imageUrl : defurl} className="card-img-top myimg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
