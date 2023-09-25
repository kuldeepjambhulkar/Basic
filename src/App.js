import React, { lazy, Suspense } from "react";
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
// import Grocery from "./components/Grocery";

const App = () => {
    return(<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>)
}

const Grocery = lazy(() => import("./components/Grocery"));

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
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> 
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