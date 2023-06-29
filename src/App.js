import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './AppResponsive.css';
import Container from './Components/Container';
import ToggleMenu from './Components/ToggleMenu';
import LoadingBar from 'react-top-loading-bar';

class App extends Component{
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
            loadingProgress: 10,
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
                <LoadingBar 
                    height={2.5}
                    color='#f11946'
                    progress={this.state.loadingProgress}
                />
                <Navbar changeTheme={this.changeTheme} theme={this.state.theme}/>
                <Container theme={this.state.theme} updateLoadingProgress={this.updateLoadingProgress}/>
                <ToggleMenu theme={this.state.theme}/>
            </>
        );
    }
}

export default App;