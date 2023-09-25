import { LOGO_URL } from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const[isLoggedIN, setIsLoggedIn] = useState(false);

    return(
            <div className="container navSection">
                <div className="left">
                    <img src={LOGO_URL} alt="logo" className="logo" />
                </div>
                <div className="right">
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/grocery'}>Grocery</Link></li>
                        <li><Link to={'/about'}>About Us</Link></li> 
                        <li><Link to={'/explore'}>Explore</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><button onClick={() => setIsLoggedIn(!isLoggedIN)}>{isLoggedIN ? 'Logout' : 'Login'}</button></li>
                    </ul>
                </div>
            </div>
    )
}

export default Header;