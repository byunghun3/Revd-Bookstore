import React from "react"
import { Grid } from "@mui/material"
import { styled } from "@mui/system"
// import ReactStars from 'react-rating-stars-component';
import { Books } from "../Books/Books"
import { Data } from "../../Data"
import { Filter } from "../Filter/Filter"
import classes from "./BookList.module.css"

const ContainerGrid = styled(Grid)({
    padding: "0 50px 0 50px"
})

function BookList() {
    const books = Data

    const bookList = books.map((book) => {
        return <Grid key={book.id} item xs={12} sm={6} md={4}>
            <Books
                title={book.title}
                author={book.author}
                image={book.image}
                rating={book.rating}
                type={book.type}
                price={book.price}
                stock={book.stock}
                status={book.status}
            />
        </Grid>
    })

    return (
        <ContainerGrid container className={classes.gridContainer} spacing={15}>
            <Filter />
            {bookList}
        </ContainerGrid>
    )
}

export default BookList
