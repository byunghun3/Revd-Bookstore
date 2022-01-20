import React, { useState, useEffect, FC } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Card } from "@mui/material"
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { styled } from "@mui/system"
import BookRating from "../BookRating/BookRating"
import classes from "./Books.module.css"

const BookCard = styled(Card)({
    position: "relative",
    // overflow: "inherit",
    minWidth: "5vw",
    transition: "ease 0.3s",
    "&:hover": {
        opacity: "0.8",
    }
})

const Info = styled(SearchIcon)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "50px",
    color: "rgba(0, 0, 0, 1)",
})

const Cart = styled(ShoppingCartIcon)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "50px",
    color: "rgba(0, 0, 0, 1)"
})

type BooksProps = {
    id: number
    title: string
    author: string
    image: any
    rating: number
    type?: string
    price: number
    stock: number
    status: string
    // onSubmit: any
}

export const Books: FC<BooksProps> = ({ id, title, author, image, rating, type, price, stock, status }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const handleMouseOver = () => {
        setShowDetails(true)
    }

    const handleMouseLeave = () => {
        setShowDetails(false)
    }

    const handleAddToCart = () => {
        let newCart = [...cart]

        let duplicateInCart = newCart.find((el: any) => {
            return el.id === id
        })

        if (duplicateInCart) {
            duplicateInCart.quantity++
        } else {
            newCart.push({
                id: id,
                title: title,
                author: author,
                image: image,
                price: price,
                quantity: 1
            })
        }
        setCart(newCart)

        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    return (
        <div className={classes.book}>
            <BookCard onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <form onSubmit={handleAddToCart}>
                    {showDetails &&
                        <span className={classes.bookAction}>
                            <div className={classes.iconBackground}>
                                <Link to={`/browse/${id}`}>
                                    <Info />
                                </Link>
                            </div>
                            <button className={classes.iconBackground} type="submit">
                                <Cart />
                            </button>
                        </span>}
                    <img className={classes.bookCover} src={image} alt="" />
                    {status === "new" ? <div className={classes.bookRibbon}>New!</div> : null}
                    <h2 className={classes.bookTitle}>{title}</h2>
                    <h4 className={classes.bookAuthor}>
                        <span className={classes.bookAuthorBy}>
                            by&nbsp;
                        </span>
                        <span className={classes.bookAuthorName}>
                            {author}
                        </span>
                    </h4>
                    <h4 className={classes.bookType}>
                        {type === "EBOOK" ? <ChromeReaderModeOutlinedIcon className={classes.bookTypeIcon} /> :
                            type === "AUDIOBOOK" ? <HeadphonesOutlinedIcon className={classes.bookTypeIcon} /> :
                                <MenuBookOutlinedIcon className={classes.bookTypeIcon} />}&nbsp;
                        <span className={classes.bookTypeWord}>{type}</span></h4>
                    <h4 className={classes.bookRating}><BookRating rating={rating} /></h4>
                    <h3 className={classes.bookPrice}>${price}</h3>
                </form>
            </BookCard>
            <h4 className={classes.bookStock}>{stock < 4 ? <div>Only {stock} books left in stock</div> : null}</h4>
        </div >
    )
}