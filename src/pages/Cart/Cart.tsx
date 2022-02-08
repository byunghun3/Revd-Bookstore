import React, { useState, useContext, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { BooksData } from "../../data/BooksData"
import { LoginContext } from "../../contexts/LoginContext"
import { styled } from "@mui/system"
import classes from "./Cart.module.css"

const StyledCartIcon = styled(ShoppingCartIcon)({
    verticalAlign: "middle",
    color: "black"
})

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

const DownArrow = styled(ArrowDropDownIcon)({
    // margin: "0 -7%"
})

const UpArrow = styled(ArrowDropUpIcon)({
    // margin: "0 -7%"
})

const RemoveButton = styled(Button)({
    flex: "1"
})

const CheckoutButton = styled(Button)({
    // display: "flex"
})

interface CartProps {

}

export const Cart: FC<CartProps> = ({ }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))
    const { isLoggedIn } = useContext(LoginContext)
    const books = BooksData
    const navigate = useNavigate()
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

    const handleGoToCheckout = () => {
        navigate("/checkout")
    }

    const handleGoToLogin = () => {
        navigate("/login")
    }

    const cartItems = cart.map((book: any) => {
        return <ItemGrid item key={book.id} id={book.id}>
            <img className={classes.bookCover} src={book.image} alt="" />
            <div className={classes.bookInfo}>
                <div className={classes.bookTitle}>{book.title}</div>
                <div className={classes.bookAuthor}>{book.author}</div>
            </div>
            <div className={classes.bookPrice}>${book.price}</div>
            <div className={classes.adjustQty}>
                <DownArrow
                    id={book.id}
                    onClick={() => handleDecrementQty(book.id)}
                />
                <div className={classes.bookQty}>{book.quantity}</div>
                <UpArrow
                    id={book.id}
                    onClick={() => handleIncrementQty(book.id)}
                />
            </div>
            <RemoveButton
                // variant="contained"
                color="error"
                onClick={() => handleRemoveFromCart(book.id)}
            >
                Remove
            </RemoveButton>
        </ItemGrid>
    })

    const totalPrice = cart.reduce((total: number, el: any) => {
        return total + (el.price * el.quantity)
    }, 0)

    return (
        <div className={classes.cartPage}>
            <form>
                <div className={classes.cartTitle}><StyledCartIcon /> Cart <StyledCartIcon /></div>
                <div className={classes.cartItems}>{cartItems}</div>
                <div className={classes.totalPrice}>
                    Total: ${totalPrice.toFixed(2)}
                </div>
                <div className={classes.checkOutLink}>
                    {isLoggedIn ?
                        <CheckoutButton
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={handleGoToCheckout}
                        >
                            CHECK OUT
                        </CheckoutButton>
                        :
                        <CheckoutButton
                            variant="contained"
                            color="primary"
                            type="button"
                            onClick={handleGoToLogin}
                        >
                            CHECK OUT
                        </CheckoutButton>
                    }
                </div>
            </form>
        </div>
    )
}
