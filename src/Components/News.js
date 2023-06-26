import React, { Component } from "react";
import NewsCard from "./NewsCard";

class News extends Component{
    render(){
        return (
            <>
            <div className="news">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
            </>
        )
    }
}

export default News;