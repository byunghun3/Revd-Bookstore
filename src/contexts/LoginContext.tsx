import React, { FC, useState, createContext } from "react"

interface LoginContextProps {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    // children: Element
    // handleUserLogin: React.FormEventHandler<HTMLFormElement>
}

interface LoginProviderProps {
    children: React.ReactNode
}

export const LoginContext = createContext({} as LoginContextProps)

export const LoginProvider: FC<LoginProviderProps> = ({ children }) => {
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