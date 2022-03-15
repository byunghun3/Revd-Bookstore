import React, { FC, useState, createContext } from "react"

interface LoginContextProps {
    isLoggedIn: boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface LoginProviderProps {
    children: React.ReactNode
}

export const LoginContext = createContext({} as LoginContextProps)

export const LoginProvider: FC<LoginProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoginContext.Provider>
    )
}