import React from 'react';
import { Books } from '../Books/Books';
import { Grid } from '@mui/material';
// import ReactStars from 'react-rating-stars-component';
import SoundAndFury from '../../assets/images/the-sound-and-the-fury.jpeg';
import Namesake from '../../assets/images/the-namesake.jpeg';
import Greenlights from '../../assets/images/greenlights.jpeg';
import HVRoad2 from '../../assets/images/hidden-valley-road2.jpeg';
import { styled } from '@mui/system';
import classes from './BookList.module.css';

const ContainerGrid = styled(Grid)({
    padding: "0 50px 0 50px"
})

function BookList() {

    const books = [
        {
            title: "The Sound and the Fury",
            author: "William Faulkner",
            image: SoundAndFury,
            rating: 4,
            type: "EBOOK",
            price: 4.99
        },
        {
            title: "Hidden Valley Road: Inside the Mind of an American Family",
            author: "Robert Kolker",
            image: HVRoad2,
            rating: 4,
            type: "AUDIOBOOK",
            price: 4.99
        },
        {
            title: "Greenlights",
            author: "Matthew McConaughey",
            image: Greenlights,
            rating: 3,
            type: "EBOOK",
            price: 4.99
        },
        {
            title: "The Namesake",
            author: "Jhumpa Lahiri",
            image: Namesake,
            rating: 3,
            type: "EBOOK",
            price: 4.99
        },
        {
            title: "The Sound and the Fury",
            author: "William Faulkner",
            price: 4.99,
            rating: 4
        },
        {
            title: "Hidden Valley Road: Inside the Mind of an American Family",
            author: "Robert Kolker",
            price: 4.99,
            rating: 4
        },
        {
            title: "Greenlights",
            author: "Matthew McConaughey",
            price: 4.99,
            rating: 3
        },
        {
            title: "The Namesake",
            author: "Jhumpa Lahiri",
            price: 4.99,
            rating: 3
        },
        {
            title: "The Sound and the Fury",
            author: "William Faulkner",
            price: 4.99,
            rating: 4
        },
        {
            title: "Hidden Valley Road: Inside the Mind of an American Family",
            author: "Robert Kolker",
            price: 4.99,
            rating: 4
        },
        {
            title: "Greenlights",
            author: "Matthew McConaughey",
            price: 4.99,
            rating: 3
        },
        {
            title: "The Namesake",
            author: "Jhumpa Lahiri",
            price: 4.99,
            rating: 3
        }
    ]

    const bookList = books.map((book) => {
        return <Grid item xs={12} sm={6} md={4}>
            <Books title={book.title}
                author={book.author}
                image={book.image}
                rating={book.rating}
                type={book.type}
                price={book.price}
            />
        </Grid>
    });

    return (
        <ContainerGrid container className={classes.gridContainer} spacing={15}>
            {bookList}
        </ContainerGrid>
    )
}

export default BookList;
