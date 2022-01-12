import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import Browse from "../../pages/Browse/Browse"
import Contact from "../../pages/Contact/Contact"
import Error from "../../pages/Error/Error"
import { Login } from "../../pages/Login/Login"
import Product from "../../pages/Product/Product"
import Header from "../Header/Header"
import { Footer } from "../Footer/Footer"


function PageRoutes() {
    const location = useLocation()
    return (
        <div>
            {location.pathname === "/login" ? null : <Header />}
            <Routes className="routes">
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/browse/:product" element={<Product />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default PageRoutes
