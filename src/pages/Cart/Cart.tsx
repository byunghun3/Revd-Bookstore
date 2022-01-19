import React, { useState, useEffect, FC } from "react"
import { Link } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import { styled } from "@mui/system"
import classes from "./Cart.module.css"

const HeaderToolbar = styled(Toolbar)({
    justifyContent: "space-between",
    maxWidth: "100%"
})

interface CartProps {

}

export const Cart: FC<CartProps> = ({ }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart])

    // e: React.MouseEvent < HTMLButtonElement >

    const handleRemoveFromCart = (id: any) => {
        let newCart = cart.filter((el: any) => el.id !== id)
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

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
            {cart.map((product: any) => {
                return <h1 key={product.id} id={product.id}>
                    <img src={product.image} alt="" />
                    {product.title}
                    {product.author}
                    {product.price}
                    <Button onClick={() => handleRemoveFromCart(product.id)}>Remove</Button>
                </h1>
            })}
        </div>
    )
}
