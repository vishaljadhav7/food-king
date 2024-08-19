import React, { lazy, Suspense } from "react";
import Layout from "./Components/Layout";
import myStore from "./store/myStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
// import Instamart from './pages/InstaMart'
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";

const Instamart = lazy(() => import('./pages/InstaMart'));

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
                path : "/cart",
                element : <Cart/>,
                children : []
            },
            {
                path : "/contact",
                element : <Contact/>,
                children : []
            },
            {
                path : "/instamart",
                element :  <Suspense fallback={<h1>Instamart Loading...</h1>}> <Instamart/> </Suspense>,
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