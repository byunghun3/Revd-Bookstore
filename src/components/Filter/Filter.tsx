import React, { FC, useState } from "react"
import { Books } from "../Books/Books"
import { Data } from "../../Data"


type Props = {
    filterate: string
    // filterBooks: (event: React.ChangeEvent<HTMLElement>) => void
}

export const Filter: FC<Props> = ({ filterate }) => {
    const [filter, setFilter] = useState("")
    const [filteredBooks, setFilteredBooks] = useState(Data)

    // const filterBooks = (e: any) => {
    //     const result = Data.filter((curData) => {
    //         return e.currentTarget.value === curData.type
    //     })
    //     setFilter(result)
    //     console.log(result)
    // }

    const handleChange = (e: any) => {
        setFilter(e.currentTarget.value)
    }

    console.log(filter)

    const filterResult = filteredBooks.filter((book) => {
        book.type === filter ?
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
            : null
    })



    // const filteredBooks = filter.filter((result) => {
    //     return result.
    // })

    return (
        <div>
            <select name="filter" value={filterate} onChange={handleChange}>
                <option value="">Filter</option>
                <option value="EBOOK">Ebook</option>
                <option value="audiobook">Audiobook</option>
                <option value="hard-copy">Hard copy</option>
                <option value="nonfiction">Nonfiction</option>
                <option value="fiction">Fiction</option>
            </select>
            {filterResult}
        </div>
    )
}
