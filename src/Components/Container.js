import React, { Component } from "react";
import News from "./News";


class Container extends Component{
    capitalizeString = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    render(){
        let {theme, updateLoadingProgress, category, newsApiKey} = this.props;
        return(
            <>
                <section className="container" data-theme={theme}>

                    <div className="news-heading">
                        <h1 className="news-heading-title" data-theme={theme}><span data-theme={theme}>{category==="general"?"":`${this.capitalizeString(category)} `}</span>Top <span data-theme={theme}>Stories</span></h1>
                        <p className="news-heading-description" data-theme={theme}>Get the latest news from around the world</p>
                    </div>


                    <News updateLoadingProgress={updateLoadingProgress} key="technology" theme={theme} category={category} newsApiKey={newsApiKey} />

                </section>
            </>
        )
    }
}

export default Container;