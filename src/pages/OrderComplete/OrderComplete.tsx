import React from "react"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"
import { Button } from "@mui/material"
import { Books } from "../../components/Books/Books"
import { Data } from "../../Data"
import { styled } from "@mui/system"
import classes from "./OrderComplete.module.css"

const BrowseButton = styled(Button)({
    marginTop: "20px"
})

interface Props {

}

export const OrderComplete = (props: Props) => {
    const books = Data

    const bookList = books.map(book => {
        return <Link key={book.id} to={`/browse/${book.id}`}>
            <img className={classes.bookCover} src={book.image} alt="" />
        </Link>
        // <Grid key={book.id} item sm={2} md={2} lg={2}>
        {/* <Books
                id={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
            rating={book.rating}
            type={book.type}
            price={book.price}
            stock={book.stock}
            status={book.status}
            /> */}
        // </Grid>
    })

    return (
        <div className={classes.orderCompletePage}>
            <div className={classes.pageContent}>
                <div className={classes.thankYou}>
                    Thank you, your order has been placed!
                </div>
                <div className={classes.confirmation}>
                    You will receive a onfirmation email shortly.
                </div>
                <BrowseButton>
                    <Link to="/browse">
                        Explore more books
                    </Link>
                </BrowseButton>
                <div className={classes.bookList}>
                    {bookList}
                </div>
            </div>
        </div>
    )
}
