import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="flex justify-between bg-slate-400 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 gap-9 px-2">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/Instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
