import React, { FC, useState, createContext } from "react"

interface LoginContextProps {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    // handleUserLogin: React.FormEventHandler<HTMLFormElement>
}

export const LoginContext = createContext({} as LoginContextProps)

export const LoginProvider: FC<LoginContextProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // const handleUserLogin = () => {
    //     setIsLoggedIn(true)
    // }
    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    )
}

// export const AuthProvider = () => {
//     const [user, setUser] = useState(null)

//     const login = (user) => {
//         setUser(user)
//     }


// }