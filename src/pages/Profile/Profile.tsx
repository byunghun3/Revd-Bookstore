import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import classes from "./Profile.module.css"

interface Props {

}

export const Profile = (props: Props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const order = JSON.parse(localStorage.getItem("order") || "[]")
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (currentUser.length) {
    //         setIsLoggedIn(true)
    //     } else { setIsLoggedIn(false) }
    // }, [currentUser])

    const handleClick = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("currentUser")
        navigate("/")
    }

    const currentUserEmail = currentUser.map((el: any) => {
        return `${el.email}`
    })

    const orderHistory = order.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return el.details.map((el: any) => {
            return <div key={el.id}>
                <img src={el.img} alt="" />
                {el.title}
                {el.author}</div>
        })
    })


    // console.log(order[0].user.email, currentUser[0].email)
    // console.log(order[0].details)

    return (
        <div className={classes.profilePage}>
            <div className={classes.pageContent}>
                Order History
                {orderHistory}
                < Button onClick={handleClick}>Log Out</Button>
            </div>
        </div >
    )
}

