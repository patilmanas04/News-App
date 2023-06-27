import React, { Component } from "react";

class NewsCard extends Component{
    render(){
        let {theme, title, description, url, urlToImage} = this.props;
        return (
            <>
            <div className="news-card" data-theme={theme}>
                <img src={urlToImage} className={urlToImage?'enable':'disable'} alt=""/>
                    <div className="news-card-content">
                        <h2 className="news-card-content-title" data-theme={theme}>{title?title:""}</h2>
                        <p className="news-card-content-description" data-theme={theme}>{description?description:""}</p>
                        <a href={url} target="_blank"><button className={`read-more-btn ${url?'enable':'disable'}`}>Read More</button></a>
                    </div>
            </div>
            </>
        )
    }
}

export default NewsCard;