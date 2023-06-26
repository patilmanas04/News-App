import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './AppResponsive.css';
import Container from './Components/Container';
import ToggleMenu from './Components/ToggleMenu';

class App extends Component{
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "script.js";
        script.async = true;
        document.body.appendChild(script);
    }

    constructor(){
        super();
        this.state = {
            theme: "light"
        }
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
                <Navbar changeTheme={this.changeTheme} theme={this.state.theme}/>
                <Container theme={this.state.theme}/>
                <ToggleMenu theme={this.state.theme}/>
            </>
        );
    }
}

export default App;