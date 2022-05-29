import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { OrdersData } from "../../data/OrdersData";
import { IOrder, IBookForOrder, IBook, ISuggestion } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./OrderHistory.module.css";

interface OrderHistoryProps {
    currentUserEmail: string | null;
}

const ItemGrid = styled(Grid)({
    flex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 10%",
    padding: "2% 0",
    borderBottom: "solid #adadad 0.1rem",
    "@media (max-width: 499px)": {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "2rem"
    }
});

export const OrderHistory: FC<OrderHistoryProps> = ({ currentUserEmail }) => {
    const orders: IOrder[] = JSON.parse(localStorage.getItem("orders") || "[]");
    const customerOrders = OrdersData;

    const hardCodedOrderHistory = customerOrders.filter((order: IOrder) => {
        return order.user.email === `${currentUserEmail}`;
    }).map((order: IOrder) => {
        return <ItemGrid item key={order.id} id={order.id}>
            <div className={classes.orderImage}>
                {order.details.map((book: IBookForOrder) => {
                    return <Link key={book.id} to={`/browse/${book.id}`}>
                        <img className={classes.bookCover} src={book.image} alt="" />
                    </Link>;
                })}
            </div>
            <div className={classes.orderId}>
                <div className={classes.orderIdLabel}>Order ID:</div>
                {order.id}
            </div>
            <div className={classes.orderBookInfo}>
                {order.details.map((book: IBookForOrder) => {
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
                    </div>;
                })}
            </div>
            <div className={classes.orderDetails}>
                <div className={classes.orderDate}>{order.date}</div>
                <div className={classes.orderTotal}>${order.total}</div>
            </div>
        </ItemGrid >;
    });

    const orderHistory = orders.filter((order: IOrder) => {
        return order.user.email === `${currentUserEmail}`;
    }).map((order: IOrder) => {
        return <ItemGrid item key={order.id} id={order.id}>
            <div className={classes.orderImage}>
                {order.details.map((book: IBookForOrder) => {
                    return <Link key={book.id} to={`/browse/${book.id}`}>
                        <img className={classes.bookCover} src={book.image} alt="" />
                    </Link>;
                })}
            </div>
            <div className={classes.orderId}>
                <div className={classes.orderIdLabel}>Order ID:</div>
                {order.id}
            </div>
            <div className={classes.orderBookInfo}>
                {order.details.map((book: IBookForOrder) => {
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
                    </div>;
                })}
            </div>
            <div className={classes.orderDetails}>
                <div className={classes.orderDate}>{order.date}</div>
                <div className={classes.orderTotal}>${order.total}</div>
            </div>
        </ItemGrid >;
    });

    return (
        <div className={classes.orderHistory}>
            {hardCodedOrderHistory}
            {orderHistory}
        </div>
    );
};