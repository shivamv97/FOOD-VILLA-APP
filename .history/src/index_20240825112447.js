import { appRoutes } from "./routes";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter(appRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
//root will render according to the AppRouter
