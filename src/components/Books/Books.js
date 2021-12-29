import React from 'react';
import { Grid, Card } from '@mui/material';

const books = [
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        rating: "4 stars",
        type: "EBOOK",
        price: "$4.99",
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        rating: "4 stars",
        type: "AUDIOBOOK",
        price: "$4.99",
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        rating: "3 stars",
        type: "EBOOK",
        price: "$4.99",
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        rating: "3 stars",
        type: "EBOOK",
        price: "$4.99",
    },
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        price: "$4.99",
        rating: "4 stars"
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        price: "$4.99",
        rating: "4 stars"
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        price: "$4.99",
        rating: "3 stars"
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        price: "$4.99",
        rating: "3 stars"
    },
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        price: "$4.99",
        rating: "4 stars"
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        price: "$4.99",
        rating: "4 stars"
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        price: "$4.99",
        rating: "3 stars"
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        price: "$4.99",
        rating: "3 stars"
    }
]

function Books() {
    const bookList = books.map((book) => {
        return <Grid item xs={12} md={4}>
                    <Card>
                        <h3>{book.title}</h3>
                        <h3>by {book.author}</h3>
                        <h3>{book.type}</h3>
                        <h3>{book.rating}</h3>
                        <h3>{book.price}</h3>
                    </Card>
                </Grid>
    })

    return (
        <Grid container>
            {bookList}
        </Grid>
    )
}

export default Books;
