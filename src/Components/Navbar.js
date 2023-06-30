import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";

class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            showToggleMenu: false,
            isChecked: false
        }
    }

    handleToggleMenu = ()=>{
        if(this.state.showToggleMenu){
            this.setState({showToggleMenu: false});
        }
        else{
            this.setState({showToggleMenu: true});
        }
    }

    handleCheckboxChange = (e)=>{
        const checked = e.target.checked;
        this.setState({
            isChecked: checked
        })
    }

    render(){
        let {changeTheme, theme} = this.props;
        return(
            <>
            <nav className="navbar" data-theme={theme}>
            <NavLink to="/"><div className="brand-name" data-theme={theme}>Express News</div></NavLink>

                <div className="navbar-items">
                    <ul className="navbar-list">
                        <li><NavLink to="/" className="navbar-item" data-theme={theme}>General</NavLink></li>
                        <li><NavLink to="/business" className="navbar-item" data-theme={theme}>Business</NavLink></li>
                        <li><NavLink to="/entertainment" className="navbar-item" data-theme={theme}>Entertainment</NavLink></li>
                        <li><NavLink to="/health" className="navbar-item" data-theme={theme}>Health</NavLink></li>
                        <li><NavLink to="/science" className="navbar-item" data-theme={theme}>Science</NavLink></li>
                        <li><NavLink to="/sports" className="navbar-item" data-theme={theme}>Sports</NavLink></li>
                        <li><NavLink to="/technology" className="navbar-item" data-theme={theme}>Technology</NavLink></li>
                        <li className="navbar-item mode-toggler">
                            <input type="checkbox" id="dark-mode-toggle1" onChange={this.handleCheckboxChange} checked={this.state.isChecked}/>
                            <label htmlFor="dark-mode-toggle1" className="toggle-mode-button1" onClick={changeTheme}></label>
                        </li>
                    </ul>
                </div>

                <div className={`toggle-menu-button ${this.state.showToggleMenu?"disable":""}`} onClick={this.handleToggleMenu} data-theme={theme}>
                    <svg height="32" viewBox="0 0 24 25" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z" fill="currentColor" /><path d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z" fill="currentColor" /><path d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z" fill="currentColor" /></svg>
                </div>

                <div className={`close-button ${this.state.showToggleMenu?"":"disable"}`} onClick={this.handleToggleMenu} data-theme={theme}>
                    <svg viewBox="0 0 24 24" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></g></svg>
                </div>
            </nav>

            <ToggleMenu theme={theme} showToggleMenu={this.state.showToggleMenu} changeTheme={changeTheme} isChecked={this.state.isChecked} handleCheckboxChange={this.handleCheckboxChange}/>
            </>
        );
    }
}

export default Navbar;