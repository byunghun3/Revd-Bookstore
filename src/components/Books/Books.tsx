import React, { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "@mui/material"
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { BookRating } from "../BookRating/BookRating"
import { BooksData } from "../../data/BooksData"
import { styled } from "@mui/system"
import classes from "./Books.module.css"

interface BooksProps {
    id: number
    title: string
    author: string
    image: any
    rating: number
    type: string
    price: number
    stock: number
    sale: number
    status: string
}

const BookCard = styled(Card)({
    position: "relative",
    minWidth: "5vw",
    transition: "ease 0.3s",
    "&:hover": {
        opacity: "0.8",
    }
})

const InfoIcon = styled(SearchIcon)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: "5rem"
})

const CartIcon = styled(ShoppingCartIcon)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: "5rem"
})

export const Books: FC<BooksProps> = ({ id, title, author, image, rating, type, price, stock, sale, status }) => {
    const [showDetails, setShowDetails] = useState(false)
    const books = BooksData

    const handleMouseOver = () => {
        setShowDetails(true)
    }

    const handleMouseLeave = () => {
        setShowDetails(false)
    }

    return (
        <div className={classes.book}>
            <BookCard onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                {showDetails &&
                    <span className={classes.bookAction}>
                        <div className={classes.infoIconBackground}>
                            <Link to={`/browse/${id}`}>
                                <InfoIcon />
                            </Link>
                        </div>
                        <button className={classes.cartIconBackground} type="submit">
                            <CartIcon />
                        </button>
                    </span>}
                <img className={classes.bookCover} src={image} alt="" />
                {status === "new" ? <div className={classes.bookRibbon}>New!</div> : null}
                <div className={classes.bookTitle}>{title}</div>
                <div className={classes.bookAuthor}>
                    <span className={classes.bookAuthorBy}>
                        by&nbsp;
                    </span>
                    <span className={classes.bookAuthorName}>
                        {author}
                    </span>
                </div>
                <div className={classes.bookType}>
                    {type === "EBOOK" ? <ChromeReaderModeOutlinedIcon className={classes.bookTypeIcon} /> :
                        type === "AUDIOBOOK" ? <HeadphonesOutlinedIcon className={classes.bookTypeIcon} /> :
                            <MenuBookOutlinedIcon className={classes.bookTypeIcon} />}&nbsp;
                    <span className={classes.bookTypeWord}>{type}</span></div>
                <div className={classes.bookRating}><BookRating rating={rating} /></div>
                <div className={`${sale > 0 ? classes.bookPriceStrike : classes.bookPrice}`}>${price}</div>
                {sale > 0 ? <div className={classes.bookPrice}>${(price - (price * sale)).toFixed(2)}</div> : null}
            </BookCard>
            <div className={classes.bookStock}>{stock < 4 ? <div>Only {stock} books left in stock</div> : null}</div>
        </div>
    )
}