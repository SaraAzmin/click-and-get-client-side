import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration"
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '*', 
        element: <NotFound></NotFound>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },
      ],
    },
  ]);

  export default router;