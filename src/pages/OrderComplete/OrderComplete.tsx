import React, { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { BooksData } from "../../data/BooksData"
import { styled } from "@mui/system"
import classes from "./OrderComplete.module.css"

const BrowseButton = styled(Button)({
    marginTop: "4rem",
    fontSize: "1.3rem"
})

export const OrderComplete: FC = () => {
    const books = BooksData

    const bookList = books.map(book => {
        return <Link key={book.id} to={`/browse/${book.id}`}>
            <img className={classes.bookCover} src={book.image} alt="" />
        </Link>
    })

    return (
        <div className={classes.orderCompletePage}>
            <div className={classes.pageContent}>
                <div className={classes.thankYou}>
                    Thank you, your order has been placed!
                </div>
                <div className={classes.confirmation}>
                    You will receive a confirmation email shortly.
                </div>
                <Link className={classes.browseLink} to="/browse">
                    <BrowseButton type="button">
                        Explore more books
                    </BrowseButton>
                </Link>
                <div className={classes.bookList}>
                    {bookList}
                </div>
            </div>
        </div>
    )
}