//rfce shortcut of starting syntax
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (<nav>
        <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo left">InstaBook</Link>
            <ul id="nav-mobile" className="right ">
                <li><Link to="/signin">SignIn</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/create">Create Post</Link></li>
            </ul>
        </div>
    </nav>);
}

export default Navbar;
