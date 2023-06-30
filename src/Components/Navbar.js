import React, { Component } from "react";

class Navbar extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: ""
        }
    }

    handleInputChange = (e)=>{
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleClick = ()=>{
        this.props.updateSearchTerm(this.state.searchTerm);
    }

    render(){
        let {changeTheme, theme} = this.props;
        return(
            <>
            <nav className="navbar" data-theme={theme}>
                <div className="brand-name" data-theme={theme}>Express News</div>

                <div className="navbar-items">
                    <ul className="navbar-list">
                        <li className="navbar-item mode-toggler">
                            <input type="checkbox" id="dark-mode-toggle1" onChange={this.updateSearchTerm}/>
                            <label htmlFor="dark-mode-toggle1" className="toggle-mode-button1"  onClick={changeTheme}></label>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        );
    }
}

export default Navbar;