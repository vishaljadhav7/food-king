import React from "react";
import Layout from "./Components/Layout";
import myStore from "./store/myStore";
import { Provider } from "react-redux";

const App = () => {
    // all routes
    
    return (
        <Provider store={myStore}>
           <div className="w-screen h-screen">
              <Layout/>
           </div>
        </Provider>
    )
}

export default App;