import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-logo">
              
                <h1>Hitch-hiking</h1>
               
                 <div className="features">
                    <ul>
                        <li><Link to='/'>Home</Link></li><br/>
                        <li><Link to='About'>About</Link></li>
                      
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;