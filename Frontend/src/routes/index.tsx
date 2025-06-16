import PATH from "../core/constants/RoutePaths";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import NotebookPage from "../pages/NotebookPage";

const routes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: PATH.HOME, element: <HomePage /> },
    { path: PATH.NOTEBOOK + "/:id", element: <NotebookPage /> },
  ],
};

const router = createBrowserRouter([routes]);

export default router;
