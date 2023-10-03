import { LOGO_URL } from "../utils/common";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {

    const[isLoggedIN, setIsLoggedIn] = useState(false);
    const {userName} = useContext(UserContext);

    return(
            <div className="container navSection flex justify-between items-center mx-auto">
                <div className="left">
                    <img src={LOGO_URL} alt="logo" className="logo w-24" />
                </div>
                <div className="right">
                    <ul className="flex items-center">
                        <li className="ml-8"><Link to={'/'}>Home</Link></li>
                        <li className="ml-8"><Link to={'/grocery'}>Grocery</Link></li>
                        <li className="ml-8"><Link to={'/about'}>About Us</Link></li> 
                        <li className="ml-8"><Link to={'/explore'}>Explore</Link></li>
                        <li className="ml-8"><Link to={'/contact'}>Contact</Link></li>
                        <li className="ml-8 italic">{userName}</li>
                        <li className="ml-8"><button className={isLoggedIN ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => setIsLoggedIn(!isLoggedIN)}>{isLoggedIN ? 'Logout' : 'Login'}</button></li>
                    </ul>
                </div>
            </div>
    )
}

export default Header;