import React from "react";
import Layout from "./Components/Layout";
import myStore from "./store/myStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Instamart from './pages/InstaMart'
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";

const App = () => {
    // all routes
    
   const router = createBrowserRouter([
    {
        path :  "/",
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Main/>,
                children : []
            },
            {
                path : "/about",
                element : <About/>,
                children : []
            },
            {
                path : "/contact",
                element : <Contact/>,
                children : []
            },
            {
                path : "/instamart",
                element : <Instamart/>,
                children : []
            },
            {
                path : "/singup",
                element : <SignUp/>,
                children : []
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>,
                children : []
            }
        ],
        errorElement : <Error/>
    }
   ]);

    return (
        <Provider store={myStore}>
           <div className="w-screen h-screen">
    
              <RouterProvider router={router}/>
           </div>
        </Provider>
    )
}

export default App;