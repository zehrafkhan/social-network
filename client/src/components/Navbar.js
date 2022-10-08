//rfce shortcut of starting syntax
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../App';

function Navbar() {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li>
                    <button className="btn waves-effect waves-light #f44336 red"
                    onClick={()=>{
                        localStorage.clear()
                        dispatch({type: "CLEAR"});
                        navigate('/signin')
                    }}
                    >SignOut</button>
                </li>
            ]
        } else {
            return [

                <li><Link to="/signin">SignIn</Link></li>,
                <li><Link to="/signup">SignUp</Link></li>
            ]
        }


    }

    return (<nav>
        <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo left">InstaBook</Link>
            <ul id="nav-mobile" className="right ">
               {renderList()}
            </ul>
        </div>
    </nav>);
}

export default Navbar;
