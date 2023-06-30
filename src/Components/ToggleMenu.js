import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ToggleMenu extends Component{
    render(){
        const {theme, showToggleMenu, changeTheme, isChecked, handleCheckboxChange} = this.props;
        return (
            <>
            <div className={`toggle-menu ${showToggleMenu?"":"hide"}`} data-theme={theme}>
                <ul className="toggle-menu-list">
                    <li><NavLink to="/" className="toggle-menu-list-item" data-theme={theme}>General</NavLink></li>
                    <li><NavLink to="/business" className="toggle-menu-list-item" data-theme={theme}>Business</NavLink></li>
                    <li><NavLink to="/entertainment" className="toggle-menu-list-item" data-theme={theme}>Entertainment</NavLink></li>
                    <li><NavLink to="/health" className="toggle-menu-list-item" data-theme={theme}>Health</NavLink></li>
                    <li><NavLink to="/science" className="toggle-menu-list-item" data-theme={theme}>Science</NavLink></li>
                    <li><NavLink to="/sports" className="toggle-menu-list-item" data-theme={theme}>Sports</NavLink></li>
                    <li><NavLink to="/technology" className="toggle-menu-list-item" data-theme={theme}>Technology</NavLink></li>
                    <li className="toggle-menu-list-item">
                        <input type="checkbox" id="dark-mode-toggle2" checked={isChecked} onChange={handleCheckboxChange}/>
                        <label htmlFor="dark-mode-toggle2" className="toggle-mode-button2" onClick={changeTheme}></label>
                    </li>
                </ul>
            </div>
            </>
        )
    }
}

export default ToggleMenu;