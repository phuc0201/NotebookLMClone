import PATH from "../core/constants/RoutePaths";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const routes = {
  path: "/",
  element: <MainLayout />,
  children: [{ path: PATH.HOME, element: <HomePage /> }],
};

const router = createBrowserRouter([routes]);

export default router;
