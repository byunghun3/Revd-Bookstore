import React, { FC, useState, useEffect } from "react"
import { Grid } from "@mui/material"
import { Books } from "../Books/Books"
import { Data } from "../../Data"


// type Props = {
//     filter: string
// }

export const Filter: FC = () => {
    const [filterValue, setFilterValue] = useState("")
    // const [filteredBooks, setFilteredBooks] = useState(Data)
    const [showBookList, setShowBookList] = useState(true)
    const filteredBooks = Data

    console.log(filterValue)

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

    const testArray = [1, 2, 3]

    // const filterData = () => {
    //     if (filterValue === "EBOOK" || "AUDIOBOOK" || "HARD COPY") {
    //         const typeFilter = filteredBooks.filter(book =>
    //             filterValue === book.type)
    //         setFilteredBooks(typeFilter)
    //     } else {
    //         const genreFilter = filteredBooks.filter(book =>
    //             filterValue === book.genre)
    //         setFilteredBooks(genreFilter)
    //     }
    // }

    // const showAllBooks = () => {
    //     if (filterValue === "show all") { setShowBookList(true) }
    //     else { setShowBookList(false) }
    // }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.currentTarget.value)
        setShowBookList(false)
    }
    console.log(filteredBooks)

    return (
        <div>
            <select name="filter" value={filterValue} onChange={handleChange}>
                <option value={4}>Filter</option>
                <option value="EBOOK">Ebook</option>
                <option value="AUDIOBOOK">Audiobook</option>
                <option value="HARD COPY">Hard copy</option>
                <option value="Nonfiction">Nonfiction</option>
                <option value="Fiction">Fiction</option>
                {/* <option value="Clear">X - Clear Filter</option> */}
            </select>
            {showBookList && bookList}
            {/* {bookList} */}
            {typeFilter}
            {genreFilter}
        </div>
    )
}
