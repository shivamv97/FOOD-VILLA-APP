import { useState } from "react";
import { Link } from "react-router-dom";

const LoggedInUser = () => {
  //API used for authentication
  return true;
};

const Title = () => (
  <a href="/ ">
    <img className="h-28 p-2" alt="logo" src={logo} />
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="flex">
      <Title />
      <div className="nav-items">
        <ul>
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
