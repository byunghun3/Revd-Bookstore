import React, { FC, useState } from "react"
import { Grid } from "@mui/material"
import { Books } from "../Books/Books"
import { Data } from "../../Data"


type Props = {
    filterate: string
}

export const Filter: FC<Props> = ({ filterate }) => {
    const [filterValue, setFilterValue] = useState("")
    // const [filteredBooks, setFilteredBooks] = useState(Data)
    const filteredBooks = Data



    console.log(filterValue)

    const typeFilter = filteredBooks.filter(book =>
        book.type === filterValue).map(book => {
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

    const genreFilter = filteredBooks.filter(book =>
        book.genre === filterValue).map(book => {
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

    const testArray = [1, 2, 3]

    const handleChange = (e: any) => {
        setFilterValue(e.currentTarget.value)
        // setFilteredBooks(typeFilter)
        // => filteredBooks.filter(book =>
        // book.type === filterValue).map(book => {
        //     return <Grid key={book.id} item xs={12} sm={6} md={4}>
        //         <Books
        //             title={book.title}
        //             author={book.author}
        //             image={book.image}
        //             rating={book.rating}
        //             type={book.type}
        //             price={book.price}
        //             stock={book.stock}
        //             status={book.status}
        //         />
        //     </Grid>
        // }))
    }

    return (
        <div>
            <select name="filter" value={filterate} onChange={handleChange}>
                <option value="">Filter</option>
                <option value="EBOOK">Ebook</option>
                <option value="AUDIOBOOK">Audiobook</option>
                <option value="HARD COPY">Hard copy</option>
                <option value="Nonfiction">Nonfiction</option>
                <option value="Fiction">Fiction</option>
            </select>
            {/* {filteredBooks} */}
            {typeFilter}
            {genreFilter}
        </div>
    )
}
