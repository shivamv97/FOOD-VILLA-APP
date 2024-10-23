import AppLayout from "./App";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Outlet } from "react-router-dom";

export const LINK_PATH_ROOT = "/";
export const LINK_PATH_ROOT_1 = "/shivam";
export const LINK_PATH_ABOUT_US = "/about-us";
export const LINK_PATH_CONTACT_US = "/contact-us";
export const LINK_PATH_PROFILE = "/profile";
export const LINK_PATH_CART = "/cart";

export const appRoutes = [
  {
    path: LINK_PATH_ROOT,
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      //Nested Routing
      {
        path: LINK_PATH_ROOT,
        element: <Body />,
      },
      {
        path: LINK_PATH_ROOT_1,
        element: (
          <span>
            {/* <Outlet /> */}
            Shivam
          </span>
        ),
        children: [
          {
            path: LINK_PATH_ROOT_1,
            element: <div>Divyanshu</div>,
            children: [
              {
                path: LINK_PATH_ROOT_1 + "/divy" + "pathExample",
                element: <div>My Comp</div>,
              },
            ],
          },
        ],
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
    ],
  },
];
