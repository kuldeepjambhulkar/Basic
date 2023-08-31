import React from "react";
import ReactDOM  from "react-dom/client";
import '../App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
    return(<>
        <Header/>
        <Body/>
        <Footer/>
    </>)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }, 
    {
        path: '/about',
        element: <About/>
    }
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);