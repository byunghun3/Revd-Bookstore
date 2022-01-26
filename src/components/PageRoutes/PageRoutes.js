import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import { Browse } from "../../pages/Browse/Browse"
import Contact from "../../pages/Contact/Contact"
import Error from "../../pages/Error/Error"
import { Login } from "../../pages/Login/Login"
import { SignUp } from "../../pages/SignUp/SignUp"
import { Cart } from "../../pages/Cart/Cart"
import { Checkout } from "../../pages/Checkout/Checkout"
import Product from "../../pages/Product/Product"
import Header from "../Header/Header"
import { HeaderTwo } from "../HeaderTwo/HeaderTwo"
import { Footer } from "../Footer/Footer"

function PageRoutes() {
    const location = useLocation()
    return (
        <div>
            {location.pathname === "/login" ||
                location.pathname === "/cart" ||
                location.pathname === "/signup" ||
                location.pathname === "/checkout" ?
                null : <Header />}
            {location.pathname === "/login" ||
                location.pathname === "/cart" ||
                location.pathname === "/signup" ||
                location.pathname === "/checkout" ?
                <HeaderTwo /> : null}
            <Routes className="routes">
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/browse/:id" element={<Product />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default PageRoutes
