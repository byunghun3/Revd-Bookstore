import React, { FC } from "react"
import { Navigate, RouteProps, Outlet } from "react-router-dom"


interface ProtectedRouteProps extends RouteProps {
    isLoggedIn: boolean
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <Outlet />
    }
    return <Navigate to="/login" />
}