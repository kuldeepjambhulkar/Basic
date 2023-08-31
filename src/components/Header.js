import { LOGO_URL } from "../utils/common";
import { useState } from "react";

const Header = () => {

    const[isLoggedIN, setIsLoggedIn] = useState(false);

    return(
            <div className="container navSection">
                <div className="left">
                    <img src={LOGO_URL} alt="logo" className="logo" />
                </div>
                <div className="right">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li> 
                        <li><a href="">Explore</a></li>
                        <li><a href="">Contact</a></li>
                        <li><button onClick={() => setIsLoggedIn(!isLoggedIN)}>{isLoggedIN ? 'Logout' : 'Login'}</button></li>
                    </ul>
                </div>
            </div>
    )
}

export default Header;