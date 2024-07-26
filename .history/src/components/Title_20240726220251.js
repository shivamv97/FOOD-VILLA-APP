import { useState } from "react";

const Title = () => (
  <a href="/ ">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtFXKFKFoihdrJEvX4jBtXqfcO2kJ0KAlIg&s"
    />
  </a>
);

const HeaderComponent = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
