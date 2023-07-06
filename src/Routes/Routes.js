import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration"
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";

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
          path: '/about',
          element: <About></About>
        },
        {
          path: '*', 
        element: <NotFound></NotFound>
      },
      ],
    },
  ]);

  export default router;