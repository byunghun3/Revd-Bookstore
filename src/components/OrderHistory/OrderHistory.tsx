import React, { FC, useContext } from "react"
import { Link } from "react-router-dom"
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
    borderBottom: "solid #adadad 0.1rem"
})

interface OrderHistoryProps {
    currentUserEmail: string
}

export const OrderHistory: FC<OrderHistoryProps> = ({ currentUserEmail }) => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]")
    const customerOrders = OrdersData

    const hardCodedOrderHistory = customerOrders.filter((order: any) => {
        return order.user.email === `${currentUserEmail}`
    }).map((order: any) => {
        return <ItemGrid item key={order.id} id={order.id}>
            <div className={classes.orderImage}>
                {order.details.map((book: any) => {
                    return <Link key={book.id} to={`/browse/${book.id}`}>
                        <img className={classes.bookCover} src={book.image} alt="" />
                    </Link>
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
                            <span className={classes.bookQty}>{book.quantity}</span>
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
                    return <Link key={book.id} to={`/browse/${book.id}`}>
                        <img className={classes.bookCover} src={book.image} alt="" />
                    </Link>
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
                            <span className={classes.bookQty}>{book.quantity}</span>
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

    // const orderBookImage = orders.filter((order: any) => {
    //     return order.user.email === `${currentUserEmail}`
    // }).map((order: any) => {
    //     return order.details.map((book: any) => {
    //         return <img className={classes.bookCover} key={book.image} src={book.image} alt="" />
    //     })
    // })

    // const orderBookInfo = orders.filter((order: any) => {
    //     return order.user.email === `${currentUserEmail}`
    // }).map((order: any) => {
    //     return order.details.map((book: any) => {
    //         return <div className={classes.bookInfo} key={book.title}>
    //             <div className={classes.bookTitle}>
    //                 {book.title}
    //             </div>
    //             <div className={classes.bookAuthor}>
    //                 {book.author}
    //             </div>
    //             <div className={classes.bookQty} key={book.title}>
    //                 <span className={classes.bookQtyLabel}>Qty:&nbsp;</span>
    //                 {book.quantity}
    //             </div>
    //         </div>
    //     })
    // })

    // console.log(orderBookImage, orderBookInfo)

    return (
        <div className={classes.orderHistory}>
            {/* <ItemGrid item key={id} id={id}>
                <div className={classes.orderImage}>
                    {orderBookImage}
                </div>
                <div className={classes.orderId}>
                    <div className={classes.orderIdLabel}>Order ID:</div>
                    {id}
                </div>
                <div className={classes.orderBookInfo}>
                    {orderBookInfo}
                </div>
                <div className={classes.orderDetails}>
                    <div className={classes.orderDate}>{date}</div>
                    <div className={classes.orderTotal}>${total}</div>
                </div>
            </ItemGrid > */}
            {hardCodedOrderHistory}
            {orderHistory}
        </div>
    )
}





