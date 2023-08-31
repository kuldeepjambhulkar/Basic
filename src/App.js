import React from "react";
import ReactDOM  from "react-dom/client";
import '../App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import ErrorEle from "./components/ErrorEle";

const App = () => {
    return(<>
        <Header/>
        <Body/>
        <Footer/>
    </>)
}

const appRouterConfigs = createBrowserRouter([
    {path: '/', element: <App/>, errorElement: <ErrorEle/>},
    {path: '/about', element: <About/>},
    {path: '/explore', element: <Explore/>},
    {path: '/contact', element: <Contact/>},
])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouterConfigs}/>);