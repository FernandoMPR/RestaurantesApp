import React from "react";
import Navigatebar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

function Home ({isLoggedIn, canActivate, handleLogout}) {
    return (
        <>
        <ToastContainer />
        <Navigatebar isLoggedIn={isLoggedIn} canActivate={canActivate} handleLogout={handleLogout}/>
        </>
    )
}

export default Home