import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Hotel from "../pages/Hotel";
import Profile from "../pages/Profile";
import Room from "../pages/Room";
import Error404 from "../pages/Error404";
import Layout from "../layout/Layout";
import User from "../pages/User";
import Login from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/user",
        element: <User />,
      },
      ,
    ],
  },
  {
    path: "/login",
    element: <Login/>,
    
  },
]);