import React, { useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import { Browse } from "../../pages/Browse/Browse"
import { Suggest } from "../../pages/Suggest/Suggest"
import Contact from "../../pages/Contact/Contact"
import Error from "../../pages/Error/Error"
import { Login } from "../../pages/Login/Login"
import { Profile } from "../../pages/Profile/Profile"
import { SignUp } from "../../pages/SignUp/SignUp"
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword"
import { Cart } from "../../pages/Cart/Cart"
import { Checkout } from "../../pages/Checkout/Checkout"
import { OrderComplete } from "../../pages/OrderComplete/OrderComplete"
import Product from "../../pages/Product/Product"
import Header from "../Header/Header"
import { HeaderTwo } from "../HeaderTwo/HeaderTwo"
import { Footer } from "../Footer/Footer"
import { UserContext } from "../../utils/auth"

function PageRoutes() {
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState("hello")
    return (
        <div>
            {location.pathname === "/login" ||
                location.pathname === "/cart" ||
                location.pathname === "/signup" ||
                location.pathname === "/forgotpassword" ||
                location.pathname === "/checkout" ?
                null : <Header />}
            {location.pathname === "/login" ||
                location.pathname === "/cart" ||
                location.pathname === "/signup" ||
                location.pathname === "/forgotpassword" ||
                location.pathname === "/checkout" ?
                <HeaderTwo /> : null}
            <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <Routes className="routes">
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/browse/:id" element={<Product />} />
                    <Route path="/suggest" element={<Suggest />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/ordercomplete" element={<OrderComplete />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </UserContext.Provider>
            <Footer />
        </div>
    )
}

export default PageRoutes
