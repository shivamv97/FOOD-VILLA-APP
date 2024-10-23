import AppLayout from "./App";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";

export const appRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      //Nested Routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About", //parentPath/{path} => localhost:1234/about/profile
        element: <About />,
        children: [
          {
            path: "profile", //parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:restaurantId", //Dynamic Routing
        element: <RestaurantMenu />,
      },
    ],
  },
];
