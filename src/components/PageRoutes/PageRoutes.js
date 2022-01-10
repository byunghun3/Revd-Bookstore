import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import Browse from "../../pages/Browse/Browse"
import Contact from "../../pages/Contact/Contact"
import Error from "../../pages/Error/Error"
import { Login } from "../../pages/Login/Login"

function PageRoutes() {
    return (
        <Routes className="routes">
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default PageRoutes
