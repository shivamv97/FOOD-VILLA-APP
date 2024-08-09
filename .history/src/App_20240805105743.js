import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";

/*
Header
   -logo
   -Nav item(right side)
   -cart
Body
   -Search bar
   -RestrauntList
     -RestrauntCard
     -Image
     -Name
     -Ratings
     -Cusines
Footer
     -Links
     -Copyrigh
*/

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //it will override children of div element
