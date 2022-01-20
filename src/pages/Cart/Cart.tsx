import React, { useState, useEffect, FC } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import { styled } from "@mui/system"
import classes from "./Cart.module.css"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    maxWidth: "100%"
})

const ContainerGrid = styled(Grid)({
    display: "flex",
    padding: "0 50px 0 50px"
})

const ItemGrid = styled(Grid)({
    flex: "1",
    display: "flex",
    // width: "40%",
    margin: "0 50px 0 50px",
    border: "black solid",
    justifyContent: "space-between",
    alignItems: "center"
})

interface CartProps {

}

export const Cart: FC<CartProps> = ({ }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart])

    // e: React.MouseEvent < HTMLButtonElement >

    const handleRemoveFromCart = (id: number) => {
        let newCart = cart.filter((el: any) => el.id !== id)
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const totalPrice = cart.reduce((total: number, book: any) => {
        return total + book.price
    }, 0).toFixed(2)

    return (
        <div className={classes.cartPage}>
            <AppBar
                color="inherit"
                elevation={0}
                position="relative"
            >
                <HeaderToolbar>
                    <div>
                        <Link to="/" className={classes.homeLink}>
                            <span className={classes.title}>Revd Bookstore</span>
                        </Link>
                    </div>
                </HeaderToolbar>
            </AppBar>
            {/* <ContainerGrid container spacing={5}> */}
            {/* <Grid key={book.id} item sm={8} md={5} lg={4}> */}
            {/* <ItemGrid item key={book.id} xs={12} sm={6} md={6}> */}

            {cart.map((book: any) => {
                return <ItemGrid item key={uuidv4()} id={book.id}>
                    {/* <div id={book.id}> */}
                    <img className={classes.bookCover} src={book.image} alt="" />
                    {book.title}
                    {book.author}
                    {book.price}
                    qty {book.quantity}
                    <Button onClick={() => handleRemoveFromCart(book.id)}>Remove</Button>
                    {/* </div> */}
                </ItemGrid>
                /* </Grid> */
            })}
            {/* </ContainerGrid> */}
            ${totalPrice}
        </div>
    )
}
