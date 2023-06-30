import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './AppResponsive.css';
import Container from './Components/Container';
import LoadingBar from 'react-top-loading-bar';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

class App extends Component{
    newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

    componentDidMount = ()=>{
        const script = document.createElement("script");
        script.src = "script.js";
        script.async = true;
        document.body.appendChild(script);
    }

    constructor(){
        super();
        this.state = {
            theme: "light",
            loadingProgress: 10
        }
    }

    updateLoadingProgress = (currentProgress)=>{
        this.setState({
            loadingProgress: currentProgress,
        })
    }

    changeTheme = ()=>{
        if(this.state.theme === "light"){
            this.setState({
                theme: "dark"
            });
            document.body.style.backgroundColor = "#121212";
        }
        else{
            this.setState({
                theme: "light"
            });
            document.body.style.backgroundColor = "#fff";
        }
    }

    render(){
        return (
            <>
            <Router basename='/'>
                <LoadingBar 
                    height={2.5}
                    color='#f11946'
                    progress={this.state.loadingProgress}
                />

                <Navbar changeTheme={this.changeTheme} theme={this.state.theme}/>

                <Routes>
                        <Route exact path="/" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="general" category="general" newsApiKey={this.newsApiKey}/>}></Route>

                        <Route exact path="/business" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="business" category="business" newsApiKey={this.newsApiKey}/>}></Route>

                        <Route exact path="/entertainment" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="entertainment" category="entertainment" newsApiKey={this.newsApiKey}/>}></Route>

                        <Route exact path="/health" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="health" category="health" newsApiKey={this.newsApiKey}/>}></Route>

                        <Route exact path="/science" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="science" category="science" newsApiKey={this.newsApiKey}/>}></Route>

                        <Route exact path="/sports" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="sports" category="sports" newsApiKey={this.newsApiKey}/>}></Route>

                        <Route exact path="/technology" element={<Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress} key="technology" category="technology" newsApiKey={this.newsApiKey}/>}></Route>
                </Routes>
                
            </Router>
            </>
        );
    }
}

export default App;