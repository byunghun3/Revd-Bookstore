import React, { useContext } from "react"
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import { LoginContext } from "../../contexts/LoginContext"
import { Profile } from "../../pages/Profile/Profile"


type Props = {};

export const ProtectedRoute = (props: Props) => {
    const { isLoggedIn } = useContext(LoginContext)

    return
    <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
}
