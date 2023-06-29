import React, { Component } from "react";
import News from "./News";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

class Container extends Component{
    render(){
        let {theme, updateLoadingProgress, newsApiKey} = this.props;
        return(
            <>
            <Router basename="/">
                <section className="container" data-theme={theme}>
                    <div className="categories">
                            <NavLink to="/" className="category">General</NavLink>
                            <NavLink to="/business" className="category">Business</NavLink>
                            <NavLink to="/entertainment" className="category">Entertainment</NavLink>
                            <NavLink to="/health" className="category">Health</NavLink>
                            <NavLink to="/science" className="category">Science</NavLink>
                            <NavLink to="/sports" className="category">Sports</NavLink>
                            <NavLink to="/technology" className="category">Technology</NavLink>
                    </div>
                    <div className="news-heading">
                        <h1 className="news-heading-title" data-theme={theme}>Top <span data-theme={theme}>Stories</span></h1>
                        <p className="news-heading-description" data-theme={theme}>Get the latest news from around the world</p>
                    </div>
                    <Routes>
                        <Route exact path="/" element={<News updateLoadingProgress={updateLoadingProgress}  key="general" theme={theme} category="general"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/business" element={<News updateLoadingProgress={updateLoadingProgress}  key="business" theme={theme} category="business"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/entertainment" element={<News updateLoadingProgress={updateLoadingProgress}  key="entertainment" theme={theme} category="entertainment"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/health" element={<News updateLoadingProgress={updateLoadingProgress}  key="health" theme={theme} category="health"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/science" element={<News updateLoadingProgress={updateLoadingProgress}  key="science" theme={theme} category="science"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/sports" element={<News updateLoadingProgress={updateLoadingProgress}  key="sports" theme={theme} category="sports"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/technology" element={<News updateLoadingProgress={updateLoadingProgress}  key="technology" theme={theme} category="technology"  newsApiKey={newsApiKey}/>}></Route>

                        <Route exact path="/technology" element={<News updateLoadingProgress={updateLoadingProgress}  key="technology" theme={theme} category="technology"  newsApiKey={newsApiKey}/>}></Route>
                    </Routes>
                </section>
            </Router>
            </>
        )
    }
}

export default Container;