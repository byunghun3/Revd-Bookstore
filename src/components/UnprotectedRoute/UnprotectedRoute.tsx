import React, { FC } from "react"
import { Navigate, RouteProps, Outlet } from "react-router-dom"


interface UnprotectedRouteProps extends RouteProps {
    isLoggedIn: boolean
}

export const UnprotectedRoute: FC<UnprotectedRouteProps> = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        return <Outlet />
    }
    return <Navigate to="/profile" />
}