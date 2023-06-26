import React, { Component } from "react";
import News from "./News";

class Container extends Component{
    render(){
        let {theme} = this.props;
        return(
            <>
            <section className="container" data-theme={theme}>
                <div className="news-heading">
                    <h1 className="news-heading-title" data-theme={theme}>Top <span data-theme={theme}>Stories</span></h1>
                    <p className="news-heading-description" data-theme={theme}>Get the latest news from around the world</p>
                </div>
                <News theme={theme}/>
            </section>
            </>
        )
    }
}

export default Container;