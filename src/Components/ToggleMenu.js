import React, { Component } from "react";

class ToggleMenu extends Component{
    render(){
        return (
            <>
                <div className="toggle-menu disable">
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="/" className="active">Home</a></li>
                        <li className="navbar-item"><a href="/">About Us</a></li>
                        <li className="navbar-item">
                            <input type="checkbox" className="darkmode-toggle" />
                            <label htmlFor="darkmode-toggle" className="toggle-button"></label>
                        </li>
                        <li className="close-button">
                            {/* <svg height="25px" id="Layer_1" style={{enableBackground:"new 0 0 512 512"}} version="1.1" viewBox="0 0 512 512" width="25px" xml: space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"><g><path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" /></g></svg> */}
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default ToggleMenu;