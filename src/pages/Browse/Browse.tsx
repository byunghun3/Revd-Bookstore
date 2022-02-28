import React, { FC, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "@mui/material"
import { Grid } from "@mui/material"
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { Filter } from "../../components/Filter/Filter"
import { Books } from "../../components/Books/Books"
import { BooksData } from "../../data/BooksData"
import { styled } from "@mui/system"
import styles from "styled-components"
import classes from "./Browse.module.css"

const ContainerGrid = styled(Grid)({
    padding: "7rem 5rem",
    // marginTop: "10px",
    // zIndex: -1,
    justifyContent: "left"
})

export const Browse: FC = () => {
    const [filterValue, setFilterValue] = useState("")
    const [showBookList, setShowBookList] = useState(true)
    const [showClearButton, setShowClearButton] = useState(false)
    const books = BooksData

    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const handleChange = (e: SelectChangeEvent) => {
        // const handleChange = (e: SelectChangeEvent<{ value: unknown }>) => {
        // if (e.currentTarget.value === "All") {
        if (e.target.value as string === "All") {
            setFilterValue(e.target.value as string)
            setShowBookList(true)
        } else {
            // setFilterValue(e.currentTarget.value)
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

    const typeFilter = books.filter(el =>
        el.type === filterValue)
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

    const genreFilter = books.filter(el =>
        el.genre === filterValue).map(book => {
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

    const typeFilterLength = books.filter(el =>
        el.type === filterValue).length

    const genreFilterLength = books.filter(el =>
        el.genre === filterValue).length

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
            {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterValue}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
            <Container>
                {/* <button>placeholder</button> */}
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
                <div className={classes.numberOfItems}>
                    -showing {showBookList ? books.length : genreFilterLength || typeFilterLength} of {books.length} items-
                </div>
            </Container>
        </div>

    )
}