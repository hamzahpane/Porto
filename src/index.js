import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./page/Home";

const router = createBrowserRouter ([


    {
        path:"/" ,
        element:<Home/>
    }
,
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
