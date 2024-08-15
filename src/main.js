import React from "react";
import ReactDOM from "react-dom/client";

const Ele = () => {
   return (
   
       <div className="bg-red-950 w-96 h-[100px]"> 
        hello
       </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Ele/>);