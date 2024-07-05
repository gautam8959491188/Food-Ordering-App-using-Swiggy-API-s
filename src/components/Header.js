import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () => (
    <a href="/">
    <img
    data-testid="logo"
    className="h-28 p-2" 
    alt="logo" 
    src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" />
   </a>
);


const Header = () => {
    const {user} = useContext(UserContext);
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const cartItems = useSelector((store)=> store.cart.items)
  
   
    return(
        <div className="flex justify-between bg-orange-200 shadow-lg">
    <Title />
    <div className="nav-items">
        <ul className="flex py-10">
            <li  className="px-2"><Link to="/"> Home </Link></li>
            <li className="px-2"><Link to="/about"> About Us </Link></li> 
            <li className="px-2"><Link to="/contact"> Contact Us </Link></li> 
           <li className="px-2"><Link to="/instamart"> Instamart </Link></li> 
           <li data-testid="cart" className="px-2"><Link to="/cart">Cart </Link>- {cartItems.length} Items</li>
        </ul>
    </div>
    <span className="p-10 font-bold text-red-900">{user.name}</span>
    {
        (isLoggedIn)? <button onClick={()=>{setIsLoggedIn(false)}}>Login</button> : 
        <button onClick={()=>{setIsLoggedIn(true)}}>Logout</button>
    }
    
    </div>
    );
};
export default Header;