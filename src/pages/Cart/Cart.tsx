import React, { FC, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { BooksData } from "../../data/BooksData";
import { LoginContext } from "../../contexts/LoginContext";
import { IBook, IBookForOrder } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./Cart.module.css";

const StyledCartIcon = styled(ShoppingCartIcon)({
    verticalAlign: "middle",
    color: "black",
    fontSize: "1.5rem"
});

const ItemGrid = styled(Grid)({
    flex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 10%",
    padding: "2% 0",
    borderBottom: "solid #adadad 0.1rem",
    "@media (max-width: 499px)": {
        margin: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "40vh"
    }
});

const DownArrow = styled(ArrowDropDownIcon)({
    fontSize: "2rem",
    cursor: "pointer"
});

const UpArrow = styled(ArrowDropUpIcon)({
    fontSize: "2rem",
    cursor: "pointer"
});

const RemoveButton = styled(Button)({
    flex: "1",
    fontSize: "1.2rem"
});

const CheckoutButton = styled(Button)({
    fontSize: "1.4rem",
    "@media (max-width: 499px)": {
        marginBottom: "10%",
    }
});

const EmptyCartIcon = styled(ShoppingCartOutlinedIcon)({
    position: "relative",
    fontSize: "18rem"
});

const StyledSmileIcon = styled(InsertEmoticonIcon)({
    marginLeft: "0.5rem",
    color: "black",
    fontSize: "2rem",
    "@media (max-width: 400px)": {
        display: "none"
    }
});

const BrowseButton = styled(Button)({
    fontSize: "1.3rem"
});

export const Cart: FC = () => {
    const [cart, setCart] = useState<IBookForOrder[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
    const { isLoggedIn } = useContext(LoginContext);
    const books = BooksData;
    const navigate = useNavigate();

    const handleRemoveFromCart = (id: number): void => {
        let newCart = cart.filter((item: IBookForOrder) => item.id !== id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleIncrementQty = (id: number): void => {
        let item = cart.find((item: IBookForOrder) => {
            return item.id === id;
        });

        const maxStock = books.find((item: IBook) => {
            return item.id === id;
        })?.stock;

        console.log(maxStock);

        if (item!.quantity < maxStock!) {
            item!.quantity++;
            let newCart = [...cart];
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    };

    const handleDecrementQty = (id: number): void | null => {
        let item = cart.find((item: IBookForOrder) => {
            return item!.id === id;
        });

        if (item!.quantity > 1) {
            item!.quantity--;
            let newCart = [...cart];
            setCart(newCart);
            localStorage.setItem("cart", JSON.stringify(newCart));
        } else { return null; }
    };

    const handleGoToCheckout = (): void => {
        navigate("/checkout");
    };

    const handleGoToLogin = (): void => {
        navigate("/login");
    };

    const cartItems = cart.map((book: IBookForOrder) => {
        return <ItemGrid item key={book.id} id={`${book.id}`}>
            <Link className={classes.bookImage} to={`/browse/${book.id}`}>
                <img className={classes.bookCover} src={book.image} alt="" />
            </Link>
            <div className={classes.bookInfo}>
                <div className={classes.bookTitle}>{book.title}</div>
                <div className={classes.bookAuthor}>{book.author}</div>
            </div>
            <div className={classes.bookPrice}>${book.price}</div>
            <div className={classes.adjustQty}>
                <DownArrow
                    id={`${book.id}`}
                    onClick={() => handleDecrementQty(book.id)}
                />
                <div className={classes.bookQty}>{book.quantity}</div>
                <UpArrow
                    id={`${book.id}`}
                    onClick={() => handleIncrementQty(book.id)}
                />
            </div>
            <RemoveButton
                color="error"
                type="button"
                onClick={() => handleRemoveFromCart(book.id)}
            >
                Remove
            </RemoveButton>
        </ItemGrid>;
    });

    const totalPrice = cart.reduce((total: number, item: IBookForOrder) => {
        return total + (item.price * item.quantity);
    }, 0);

    return (
        <div className={classes.cartPage}>
            {cart.length ?
                <form className={classes.cartContent}>
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
                :
                <div className={classes.emptyCart}>
                    <EmptyCartIcon />
                    <div className={classes.emptyCartText}>Woah, the cart is empty!</div>
                    <div className={classes.emptyCartText}>It seems like you forgot to pick a book <StyledSmileIcon /> </div>
                    <Link className={classes.link} to="/browse">
                        <BrowseButton type="button" variant="outlined">Explore our books</BrowseButton>
                    </Link>
                </div>
            }
        </div>
    );
};