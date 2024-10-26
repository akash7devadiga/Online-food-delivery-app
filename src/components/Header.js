import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";


const Header = () => {
  const { loggedInUser } = useContext(UserContext);


  const [btnReacts, setBtnReacts] = useState("Login");
  const ifOnline = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between">
      <div className='logo-container'>
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className="flex p-4 m-4">
          <li className="px-4">

            Online status:{ifOnline ? "✅" : "❎"}

          </li>
          <li className="px-4">
            <Link to='/'>Home</Link>
          </li>
          <li className="px-4">
            <Link to='/about'>About</Link>
          </li>
          <li className="px-4">
            <Link to='/contact'>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to='/cart'>Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="font-bold">User: {loggedInUser}</li>
          <button className="ml-2" onClick={() => {
            btnReacts === "Login" ? setBtnReacts("Logout") : setBtnReacts("Login")
          }}>{btnReacts}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;