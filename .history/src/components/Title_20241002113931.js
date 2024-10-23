import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";

const LoggedInUser = () => {
  //API used for authentication
  return true;
};

const Title = () => (
  <a href="/ ">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtFXKFKFoihdrJEvX4jBtXqfcO2kJ0KAlIg&s"
    />
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items); //subscribing to store
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-900 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 gap-9 px-2">
          <li className="rounded-md py-3 px-2 font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
            <Link to="/">Home </Link>
          </li>
          <li className="rounded-md py-3 px-2 font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
            <Link to="/About">About us</Link>
          </li>
          <li className="rounded-md py-3 px-2 font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
            <Link to="/Contact">Contact us</Link>
          </li>
          <li className="rounded-md py-3 px-2 font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className="rounded-md py-3 px-2 font-medium text-gray-300 hover:bg-gray-500 hover:text-white">
            <Link to="/Cart">Cart - {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {/* <h1 className="text-white">{isOnline ? "🟢" : "No"}</h1> */}
      {/* <h2 className="text-white">{user.name}</h2> */}
      {isLoggedIn ? (
        <button
          onClick={() => setisLoggedIn(false)}
          className="bg-red-400 text-white rounded-md m-2 p-2"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setisLoggedIn(true)}
          className="bg-red-400 text-white rounded-md m-2 p-2"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
