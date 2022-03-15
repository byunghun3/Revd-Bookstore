import React, { FC, useState } from "react"
import { Container, Grid, SelectChangeEvent } from "@mui/material"
import { Filter } from "../../components/Filter/Filter"
import { Books } from "../../components/Books/Books"
import { BooksData } from "../../data/BooksData"
import { styled } from "@mui/system"
import classes from "./Browse.module.css"

const ContainerGrid = styled(Grid)({
    padding: "7rem 5rem",
    justifyContent: "left"
})

export const Browse: FC = () => {
    const [filterValue, setFilterValue] = useState("")
    const [showBookList, setShowBookList] = useState(true)
    const [showClearButton, setShowClearButton] = useState(false)
    const books = BooksData

    const handleChange = (e: SelectChangeEvent) => {
        if (e.target.value as string === "All") {
            setFilterValue(e.target.value as string)
            setShowBookList(true)
        } else {
            setFilterValue(e.target.value as string)
            setShowBookList(false)
            setShowClearButton(true)
        }
    }

    const handleClearFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFilterValue("")
        setShowBookList(true)
        setShowClearButton(false)
    }

    const typeFilter = books.filter(book =>
        book.type === filterValue)
        .map(book =>
            <Grid key={book.id} item sm={8} md={5} lg={4}>
                <Books
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    rating={book.rating}
                    type={book.type}
                    price={book.price}
                    stock={book.stock}
                    sale={book.sale}
                    status={book.status}
                />
            </Grid>
        )

    const genreFilter = books.filter(book =>
        book.genre === filterValue).map(book => {
            return <Grid key={book.id} item sm={8} md={5} lg={4}>
                <Books
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    rating={book.rating}
                    type={book.type}
                    price={book.price}
                    stock={book.stock}
                    sale={book.sale}
                    status={book.status}
                />
            </Grid>
        })

    const typeFilterLength = books.filter(book =>
        book.type === filterValue).length

    const genreFilterLength = books.filter(book =>
        book.genre === filterValue).length

    const bookList = books.map(book => {
        return <Grid key={book.id} item sm={8} md={5} lg={4}>
            <Books
                id={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                rating={book.rating}
                type={book.type}
                price={book.price}
                stock={book.stock}
                sale={book.sale}
                status={book.status}
            />
        </Grid>
    })

    return (
        <div className={classes.browsePage}>
            <Filter
                filter={filterValue}
                onChange={handleChange}
                onClick={handleClearFilter}
                showClearButton={showClearButton}
            />
            <Container>
                <ContainerGrid container spacing={15}>
                    {showBookList && bookList}
                    {typeFilter}
                    {genreFilter}
                </ContainerGrid>
                <div className={classes.numberOfItems}>
                    -showing {showBookList ? books.length : genreFilterLength || typeFilterLength} of {books.length} items-
                </div>
            </Container>
        </div>
    )
}