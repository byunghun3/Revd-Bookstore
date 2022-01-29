import React, { useState, createContext } from "react"

interface UserContextProps {
    isLoggedIn: boolean
    // setIsLoggedIn
}

export const UserContext = createContext(null)

// export const AuthProvider = () => {
//     const [user, setUser] = useState(null)

//     const login = (user) => {
//         setUser(user)
//     }


// }