import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/LogIn/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: (
       
          <Home></Home>
       )
        // path: '/',
        // element: (
        // <PrivateRoute>
        //   <Home></Home>
        // </PrivateRoute>)
      }

    ]
  },



  {
    path: '/logIn',
    element: <LogIn></LogIn>
  },
  {
    path: '/register',
    element: <Register></Register>
  }


])
export default router;