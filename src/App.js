import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import './AppResponsive.css';
import Container from './Components/Container';
import ToggleMenu from './Components/ToggleMenu';

class App extends Component{
    // componentDidMount(){
    //     const script = document.createElement("script");
    //     script.src = "script.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    // }

    // componentWillUnmount(){
    //     if(script){
    //         document.body.removeChild(script);
    //     }
    // }

    render(){
        return (
            <>
                <Navbar />
                <Container/>
                <ToggleMenu/>
            </>
        );
    }
}

export default App;