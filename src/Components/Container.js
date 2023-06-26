import React, { Component } from "react";
import News from "./News";

class Container extends Component{
    render(){
        return(
            <>
            <section className="container" data-theme="light">
                <div className="news-heading">
                    <h1 className="news-heading-title">Top <span>Stories</span></h1>
                    <p className="news-heading-description">Get the latest news from around the world</p>
                </div>
                <News/>
            </section>
            </>
        )
    }
}

export default Container;