import React, { FC, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { OrdersData } from "../../data/OrdersData"


type Props = {}

export const OrderHistory: FC<Props> = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const customerOrders = OrdersData
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)


    const currentUserEmail = isLoggedIn ? currentUser[0].email : null

    const displayHardCodedOrderHistory = customerOrders.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <div key={el.id}>
            {el.date}
            {el.details.title}
            {el.details.author}
        </div>
    })

    const orderHistory = orders.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <div key={el.id}>
            <img src={el.details.image} alt="" />
            {el.details.title}
            {el.details.author}
        </div>
    })
    return (
        <div>
            {displayHardCodedOrderHistory}
            {orderHistory}
        </div>
    )
}





