import React, { lazy, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";


import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {

    // Dummy auth code
    const[userName, setUserName] = useState('a');
    useEffect(() => {
        setUserName("John Wick");
    }, [])

    return(<>
        <Provider store={appStore}>
            <UserContext.Provider value={{userName: userName}}>
                <Header/>
            </UserContext.Provider>
            <Outlet/>
            <Footer/>
        </Provider>
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