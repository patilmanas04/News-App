import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

class App extends Component{
    render(){
        return (
            <>
                <Navbar/>
                <News/>
            </>
        );
    }
}

export default App;