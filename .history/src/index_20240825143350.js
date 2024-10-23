import React from "react";
import { appRoutes } from "./routes";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter(appRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root will render according to the AppRouter
