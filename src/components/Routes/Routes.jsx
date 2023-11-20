import {
      createBrowserRouter,
    } from "react-router-dom";
import App from "../../App";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Register from "../Register/Register";
import LogIn from "../Register/LogIn";
import SingleChef from "../Pages/SingleChef";

const router = createBrowserRouter([
      {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>,
            },
            {
                  path:'/about',
                  element:<About></About>
            },
            {
                  path:'/register',
                  element:<Register></Register>
            },
            {
                  path:'/signIn',
                  element:<LogIn></LogIn>
            },
            {
                  path:'/chef/:id',
                  element:<SingleChef></SingleChef>,
                  loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                  path:'/recipes',
                  element:<Recipes></Recipes>,
                  
            },
        ]
      },
    ]);

    export default router;