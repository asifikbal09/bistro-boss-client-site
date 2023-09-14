import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivetRoute from "./PrivateRoutes";
import Users from "../Pages/Dashboard/AllUsers/Users";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManegeItem from "../Pages/Dashboard/ManegeItem/ManegeItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "myCard",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manegeItem",
        element: (
          <AdminRoute>
            <ManegeItem></ManegeItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
