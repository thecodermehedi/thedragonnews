import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import Errorpage from "../pages/Error/Errorpage";
import Homepage from "./../pages/Home/Homepage";
import Loginpage from "./../pages/Login/Loginpage";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
        loader: () => fetch("/data/news.json")
      },
    ],
  },
]);

export default routes;
