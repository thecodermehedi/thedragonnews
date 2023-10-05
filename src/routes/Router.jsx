import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import Signup from "../pages/Signup/Signup";
import PrivateRouter from "./PrivateRouter";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRouter>
            <NewsDetails />
          </PrivateRouter>
        ),
        loader: () => fetch("/data/news.json"),
      },
    ],
  },
]);

export default Router;
