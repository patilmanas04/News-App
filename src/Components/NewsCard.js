import React, { Component } from "react";

class NewsCard extends Component{
    render(){
        return (
            <>
            <div className="news-card" data-theme="light">
                <img src="https://cdn.mos.cms.futurecdn.net/epkKvxXAVQR3SdQWN3Nmha-1200-80.jpg" alt=""/>
                    <div className="news-card-content">
                        <h2 className="news-card-content-title">Headline</h2>
                        <p className="news-card-content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus dolor aut animi tempora, saepe harum quo quam minus repudiandae nesciunt.</p>
                        <button className="read-more-btn">Read More</button>
                    </div>
            </div>
            </>
        )
    }
}

export default NewsCard;