import React, { Component } from "react";
import News from "./News";
import { Link } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

class Container extends Component{
    render(){
        let {theme} = this.props;
        return(
            <>
            <Router basename="/">
                <section className="container" data-theme={theme}>
                    <div className="categories">
                    <Link to="/"><button className="category active-btn">General</button></Link>
                    <Link to="/business"><button className="category">Business</button></Link>
                    <Link to="/entertainment"><button className="category">Entertainment</button></Link>
                    <Link to="/health"><button className="category">Health</button></Link>
                    <Link to="/science"><button className="category">Science</button></Link>
                    <Link to="/sports"><button className="category">Sports</button></Link>
                    <Link to="/technology"><button className="category">Technology</button></Link>
                    </div>
                    <div className="news-heading">
                        <h1 className="news-heading-title" data-theme={theme}>Top <span data-theme={theme}>Stories</span></h1>
                        <p className="news-heading-description" data-theme={theme}>Get the latest news from around the world</p>
                    </div>
                    <Routes>
                        <Route exact path="/" element={<News key="general" theme={theme} category="general" setMaxPages={this.setMaxPages}/>}></Route>

                        <Route exact path="/business" element={<News key="business" theme={theme} category="business" setMaxPages={this.setMaxPages}/>}></Route>

                        <Route exact path="/entertainment" element={<News key="entertainment" theme={theme} category="entertainment" setMaxPages={this.setMaxPages}/>}></Route>

                        <Route exact path="/health" element={<News key="health" theme={theme} category="health" setMaxPages={this.setMaxPages}/>}></Route>

                        <Route exact path="/science" element={<News key="science" theme={theme} category="science" setMaxPages={this.setMaxPages}/>}></Route>

                        <Route exact path="/sports" element={<News key="sports" theme={theme} category="sports" setMaxPages={this.setMaxPages}/>}></Route>

                        <Route exact path="/technology" element={<News key="technology" theme={theme} category="technology" setMaxPages={this.setMaxPages}/>}></Route>
                        <Route exact path="/technology" element={<News key="technology" theme={theme} category="technology" setMaxPages={this.setMaxPages}/>}></Route>
                    </Routes>
                </section>
            </Router>
            </>
        )
    }
}

export default Container;