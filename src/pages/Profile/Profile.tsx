import React, { useState } from "react"
import { Button } from "@mui/material"
import classes from "./Profile.module.css"

interface Props {

}

export const Profile = (props: Props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const order = JSON.parse(localStorage.getItem("order") || "[]")
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handleClick = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("currentUser")
    }

    // console.log(order[0].user.email, currentUser[0].email)
    // console.log(order[0].details)

    return (
        <div className={classes.profilePage}>
            <div className={classes.pageContent}>
                Order History
                {currentUser.map((el: any) => {
                    return el.email
                })}
                {order.filter((el: any) => {
                    return el.user.email === currentUser[0].email
                }).map((el: any) => {
                    return el.details.map((el: any) => {
                        return <div key={el.id}>{el.author}</div>
                    })
                })
                }
                {order.map((el: any) => {
                    return el.user.password
                })}
                < Button onClick={handleClick}>Log Out</Button>
            </div>
        </div >
    )
}

