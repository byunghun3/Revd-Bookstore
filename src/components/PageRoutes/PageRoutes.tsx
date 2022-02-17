import React, { FC, useContext, useEffect } from "react"
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import { Browse } from "../../pages/Browse/Browse"
import { Suggest } from "../../pages/Suggest/Suggest"
import Contact from "../../pages/Contact/Contact"
import Error from "../../pages/Error/Error"
import { Login } from "../../pages/Login/Login"
import { Profile } from "../../pages/Profile/Profile"
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute"
import { SignUp } from "../../pages/SignUp/SignUp"
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword"
import { Cart } from "../../pages/Cart/Cart"
import { Checkout } from "../../pages/Checkout/Checkout"
import { OrderComplete } from "../../pages/OrderComplete/OrderComplete"
import Product from "../../pages/Product/Product"
import Header from "../Header/Header"
import { HeaderTwo } from "../HeaderTwo/HeaderTwo"
import { Footer } from "../Footer/Footer"
import { LoginContext, LoginProvider } from "../../contexts/LoginContext"
import { UnprotectedRoute } from "../UnprotectedRoute/UnprotectedRoute"

export const PageRoutes: FC = () => {
    const location = useLocation()
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")

    useEffect(() => {
        if (currentUser.length) {
            setIsLoggedIn(true)
        } else { setIsLoggedIn(false) }
    }, [currentUser])

    return (
        // <LoginProvider>
        <div>
            {location.pathname === "/login" ||
                location.pathname === "/cart" ||
                location.pathname === "/signup" ||
                location.pathname === "/forgotpassword" ||
                location.pathname === "/checkout" ?
                // location.pathname === "*" ?
                <HeaderTwo /> : <Header />}
            {/* {location.pathname === "/" ||
                location.pathname === "/about" ||
                location.pathname === "/browse" ||
                location.pathname === "/browse/:id" ||
                location.pathname === "/suggest" ||
                location.pathname === "/contact" ||
                location.pathname === "/profile" ||
                location.pathname === "/ordercomplete" ?
                <Header /> : <HeaderTwo />} */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/browse/:id" element={<Product />} />
                <Route path="/suggest" element={<Suggest />} />
                <Route path="/contact" element={<Contact />} />
                <Route element={<UnprotectedRoute isLoggedIn={isLoggedIn} />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                </Route>
                {/* <Route path="/login" element={isLoggedIn ? <Navigate to="/profile" /> : <Login />} /> */}
                {/* <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} /> */}
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/ordercomplete" element={<OrderComplete />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            {/* <button onClick={() => { setIsLoggedIn(true) }}></button> */}
        </div>
        // </LoginProvider >
    )
}
