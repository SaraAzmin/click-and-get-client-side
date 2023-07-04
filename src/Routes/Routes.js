import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration"
import Login from "../Pages/Login/Login";
import Reviews from "../Pages/Reviews/Reviews";
import About from "../Pages/About/About";

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
          path: '/reviews',
          element: <Reviews></Reviews>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ],
    },
  ]);

  export default router;