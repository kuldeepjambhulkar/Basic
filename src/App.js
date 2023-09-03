import React from "react";
import ReactDOM  from "react-dom/client";
import '../App.css'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ErrorEle from "./components/ErrorEle";
import About from "./components/About";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import RestoMenu from "./components/RestoMenu";

const App = () => {
    return(<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>)
}

const appRouteConfigs = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/explore',
                element: <Explore/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/restomenu/:id',
                element: <RestoMenu/>
            },
        ],
        errorElement: <ErrorEle/>
    }

])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouteConfigs}/>);