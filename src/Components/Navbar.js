import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        let {changeTheme, theme} = this.props;
        return(
            <>
            <nav className="navbar" data-theme={theme}>
                <div className="brand-name" data-theme={theme}>Express News</div>

                <div className="navbar-items">
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="/" className="active" data-theme={theme}>Home</a></li>
                        <li className="navbar-item"><a href="/" data-theme={theme}>About Us</a></li>
                        <li className="navbar-item mode-toggler">
                            <input type="checkbox" id="darkmode-toggle" />
                            <label htmlFor="darkmode-toggle" className="toggle-button" onClick={changeTheme}></label>
                        </li>
                    </ul>

                    <form id="search-news">
                        <input type="text" className="search" placeholder="Search for topics"/>
                        <button type="button" className="search-button">Search</button>
                    </form>
                </div>

                <div className="toggle-menu-button" data-theme={theme}>
                    <svg height="32" viewBox="0 0 24 25" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z" fill="currentColor" /><path d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z" fill="currentColor" /><path d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z" fill="currentColor" /></svg>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar;