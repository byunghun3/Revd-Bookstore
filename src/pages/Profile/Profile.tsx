import React, { useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { styled } from "@mui/system"
import classes from "./Profile.module.css"
import { OrderHistory } from "../../components/OrderHistory/OrderHistory"
import ReviewHistory from "../../components/ReviewHistory/ReviewHistory"



interface Props {

}

export const Profile = (props: Props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    // const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
    const suggestions = JSON.parse(localStorage.getItem("suggestions") || "[]")
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    const navigate = useNavigate()
    // useEffect(() => {
    //     if (currentUser.length) {
    //         setIsLoggedIn(true)
    //     } else { setIsLoggedIn(false) }
    // }, [currentUser])

    const handleLogOut = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("currentUser")
        navigate("/")
    }



    const currentUserEmail = isLoggedIn ? currentUser[0].email : null

    const suggestionHistory = suggestions.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <div key={el.id}>
            {el.suggested.title}
            {el.suggested.author}
            {el.suggested.comment}
        </div>
    })

    return (
        <div className={classes.profilePage}>
            <div className={classes.pageContent}>
                Order History
                <OrderHistory />
                Review History
                <ReviewHistory />
                Suggestion History
                {suggestionHistory.length ?
                    suggestionHistory :
                    <div>No suggestions yet</div>
                }
                < Button onClick={handleLogOut}>Log Out</Button>
            </div>
        </div >
    )
}

