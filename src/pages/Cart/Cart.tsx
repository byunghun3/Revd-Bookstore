import React, { useState, useContext, FC } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { BooksData } from "../../data/BooksData"
import { LoginContext } from "../../contexts/LoginContext"
import { styled } from "@mui/system"
import classes from "./Cart.module.css"

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
    const { isLoggedIn } = useContext(LoginContext)
    const books = BooksData
    // useEffect(() => {
    //     localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart])

    const handleRemoveFromCart = (id: number) => {
        let newCart = cart.filter((el: any) => el.id !== id)
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const handleIncrementQty = (id: number) => {
        let item = cart.find((el: any) => {
            return el.id === id
        })


        const maxStock = books.find((el: any) => {
            return el.id === id
        })?.stock

        console.log(maxStock)

        if (item.quantity < maxStock!) {
            item.quantity++
            let newCart = [...cart]
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart))
        }
    }

    // const item = cart.find((el: any) => {
    //     return el.id === 1
    // }).quantity

    // console.log(item)

    const handleDecrementQty = (id: number) => {
        let item = cart.find((el: any) => {
            return el.id === id
        })

        if (item.quantity > 1) {
            item.quantity--
            let newCart = [...cart]
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart))
        }
    }

    const itemPrice = cart.reduce((total: number, el: any) => {
        return total + (el.price * el.quantity)
    }, 0)

    return (
        <div className={classes.cartPage}>
            {/* <ContainerGrid container spacing={5}> */}
            {/* <Grid key={book.id} item sm={8} md={5} lg={4}> */}
            {/* <ItemGrid item key={book.id} xs={12} sm={6} md={6}> */}
            <form>
                {cart.map((book: any) => {
                    return <ItemGrid item key={uuidv4()} id={book.id}>
                        {/* <div id={book.id}> */}
                        <img className={classes.bookCover} src={book.image} alt="" />
                        {book.title}
                        {book.author}
                        ${book.price}
                        qty {book.quantity}
                        <ArrowDropUpIcon
                            id={book.id}
                            onClick={() => handleIncrementQty(book.id)}
                        />
                        <ArrowDropDownIcon
                            id={book.id}
                            onClick={() => handleDecrementQty(book.id)}
                        />
                        <Button onClick={() => handleRemoveFromCart(book.id)}>Remove</Button>
                        {/* </div> */}
                    </ItemGrid>
                    /* </Grid> */
                })}
                {/* </ContainerGrid> */}
                ${itemPrice.toFixed(2)}
                {isLoggedIn ?
                    <Link className={classes.headerLink} to="/checkout">
                        {/* <Button type="submit"> */}
                        Check Out
                        {/* </Button> */}
                    </Link>
                    :
                    <Link className={classes.headerLink} to="/login">
                        Check Out
                    </Link>
                }
            </form>
        </div>
    )
}
