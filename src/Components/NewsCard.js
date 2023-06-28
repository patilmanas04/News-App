import React, { Component } from "react";

class NewsCard extends Component{
    render(){
        let {theme, title, description, url, urlToImage, author, date} = this.props;
        return (
            <>
            <div className="news-card" data-theme={theme}>
                <img src={urlToImage} className={urlToImage?'enable':'disable'} alt=""/>

                <div className="news-card-content">
                    <h2 className="news-card-content-title" data-theme={theme}>{title?title:""}</h2>
                    <p className="news-card-content-description" data-theme={theme}>{description?description:""}</p>
                    <p className="author-date" data-theme={theme}>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                    <a rel="noreferrer" href={url} target="_blank"><button className={`read-more-btn ${url?'enable':'disable'}`}>Read More</button></a>
                </div>
            </div>
            </>
        )
    }
}

export default NewsCard;