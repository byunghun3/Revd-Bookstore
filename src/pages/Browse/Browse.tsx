import React, { FC, useState, useEffect } from "react"
import { Container } from "@mui/material"
import { Grid } from "@mui/material"
import { Filter } from "../../components/Filter/Filter"
import { Books } from "../../components/Books/Books"
import { Data } from "../../Data"
import { styled } from "@mui/system"
import styles from "styled-components"
import classes from "./Browse.module.css"

const ContainerGrid = styled(Grid)({
    padding: "0 50px 0 50px"
})

interface BrowseProps {

}

export const Browse: FC<BrowseProps> = () => {
    const [filterValue, setFilterValue] = useState("")
    const [showBookList, setShowBookList] = useState(true)
    const filteredBooks = Data

    const typeFilter = filteredBooks.filter(book =>
        book.type === filterValue)
        .map(book =>
            <Grid key={book.id} item xs={12} sm={6} md={4}>
                <Books
                    id={book.id}
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
        )

    const genreFilter = filteredBooks.filter(book =>
        book.genre === filterValue).map(book => {
            return <Grid key={book.id} item xs={12} sm={6} md={4}>
                <Books
                    id={book.id}
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

    const bookList = filteredBooks.map(book => {
        return <Grid key={book.id} item xs={12} sm={6} md={4}>
            <Books
                id={book.id}
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

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.currentTarget.value)
        setShowBookList(false)
    }

    const handleClearFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFilterValue("")
        setShowBookList(true)
    }

    return (
        <div className={classes.browsePage}>
            <Container>
                <Filter filter={filterValue} onChange={handleChange} onClick={handleClearFilter} />
                {/* <select name="sort"
                value={props.sort} onChange={props.sortBooks}
                >
                    <option value="">Sort</option>
                    <option value="highest-price">Highest price</option>
                    <option value="lowest-price">Lowest price</option>
                    <option value="highest-rating">Lowest rating</option>
                    <option value="lowest-rating">Lowest rating</option>
                </select> */}
                <ContainerGrid container spacing={15}>
                    {showBookList && bookList}
                    {typeFilter}
                    {genreFilter}
                </ContainerGrid>
            </Container>
        </div>

    )
}