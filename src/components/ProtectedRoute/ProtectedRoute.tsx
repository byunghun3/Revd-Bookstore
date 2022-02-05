import React, { FC, useContext } from "react"
import { Route, Routes, useLocation, Navigate, RouteProps, Outlet } from "react-router-dom"
import { LoginContext } from "../../contexts/LoginContext"
import { Login } from "../../pages/Login/Login"
import { Profile } from "../../pages/Profile/Profile"


interface ProtectedRouteProps extends RouteProps {
    isLoggedIn: boolean
    // outlet: JSX.Element
    // path: string
    // element: Element
    // element: JSX.IntrinsicElements
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <Outlet />
    }
    return <Navigate to="/login" />

    // <Route {...ProtectedRouteProps}
    // element={(props) => {
    // isLoggedIn ? <element /> : <Navigate to={{ pathname: "/login" />}} />
    // }
    // }
    // />
}

export default ProtectedRoute
