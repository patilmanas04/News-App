import React, { Component } from "react";

class NewsItem extends Component {
    render() {
        let {heading, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">{(heading.length>43)?heading.slice(0, 43)+"...":heading}</h5>
                    <p className="card-text">{(description.length>132)?description.slice(0, 132)+"...":description}</p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        );
    }
}

export default NewsItem;