import React, { FC, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { LoginContext } from "../../contexts/LoginContext"
import Grid from "@mui/material/Grid"
import { OrdersData } from "../../data/OrdersData"
import { styled } from "@mui/system"
import classes from "./OrderHistory.module.css"

const ItemGrid = styled(Grid)({
    flex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 10%",
    padding: "2% 0",
    // borderTop: "solid gray 1px",
    borderBottom: "solid #adadad 1px"
})

type Props = {}

export const OrderHistory: FC<Props> = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const customerOrders = OrdersData
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

    const currentUserEmail = isLoggedIn ? currentUser[0].email : null

    const hardCodedOrderHistory = customerOrders.filter((order: any) => {
        return order.user.email === `${currentUserEmail}`
    }).map((order: any) => {
        return <ItemGrid item key={order.id} id={order.id}>
            <div className={classes.orderImage}>
                {order.details.map((book: any) => {
                    return <img className={classes.bookCover} key={book.image} src={book.image} alt="" />
                })}
            </div>
            <div className={classes.orderId}>
                <div className={classes.orderIdLabel}>Order ID:</div>
                {order.id}
            </div>
            <div className={classes.orderBookInfo}>
                {order.details.map((book: any) => {
                    return <div className={classes.bookInfo} key={book.title}>
                        <div className={classes.bookTitle}>
                            {book.title}
                        </div>
                        <div className={classes.bookAuthor}>
                            {book.author}
                        </div>
                        <div className={classes.bookQty} key={book.title}>
                            <span className={classes.bookQtyLabel}>Qty:&nbsp;</span>
                            {book.quantity}
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.orderDetails}>
                <div className={classes.orderDate}>{order.date}</div>
                <div className={classes.orderTotal}>${order.total}</div>
            </div>
        </ItemGrid >
    })


    const orderHistory = orders.filter((order: any) => {
        return order.user.email === `${currentUserEmail}`
    }).map((order: any) => {
        return <ItemGrid item key={order.id} id={order.id}>
            <div className={classes.orderImage}>
                {order.details.map((book: any) => {
                    return <img className={classes.bookCover} key={book.image} src={book.image} alt="" />
                })}
            </div>
            <div className={classes.orderId}>
                <div className={classes.orderIdLabel}>Order ID:</div>
                {order.id}
            </div>
            <div className={classes.orderBookInfo}>
                {order.details.map((book: any) => {
                    return <div className={classes.bookInfo} key={book.title}>
                        <div className={classes.bookTitle}>
                            {book.title}
                        </div>
                        <div className={classes.bookAuthor}>
                            {book.author}
                        </div>
                        <div className={classes.bookQty} key={book.title}>
                            <span className={classes.bookQtyLabel}>Qty:&nbsp;</span>
                            {book.quantity}
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.orderDetails}>
                <div className={classes.orderDate}>{order.date}</div>
                <div className={classes.orderTotal}>${order.total}</div>
            </div>
        </ItemGrid >
    })

    return (
        <div className={classes.orderHistory}>
            {hardCodedOrderHistory}
            {orderHistory}
        </div>
    )
}





