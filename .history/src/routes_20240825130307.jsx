import AppLayout from "./App";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { Outlet } from "react-router-dom";

export const LINK_PATH_ROOT = "/";
export const LINK_PATH_ABOUT_US = "/about-us";
export const LINK_PATH_CONTACT_US = "/contact-us";
export const LINK_PATH_PROFILE = "/profile";
export const LINK_PATH_CART = "/cart";

export const appRoutes = [
  {
    path: LINK_PATH_ROOT,
    element: <AppLayout />,
    children: [
      //Nested Routing
      {
        path: LINK_PATH_ROOT,
        element: <Body />,
      },
      {
        path: "/about", //parentPath/{path} => localhost:1234/about/profile
        element: <About />,
        children: [
          {
            path: "profile", //parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurantId", //Dynamic Routing
        element: <RestaurantMenu />,
      },
      {
        path: "/shivam", //Dynamic Routing
        element: <div>Shivam </div>,
        errorElement:<div>jaskldjalksjdlkajslkdjasjdlkasj<div/>,
        loader: ()=>
         
          
          
      },
    ],
  },
];
