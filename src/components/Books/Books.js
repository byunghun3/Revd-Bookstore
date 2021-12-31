import React from 'react';
import BookRating from '../BookRating/BookRating';
import { Grid, Card } from '@mui/material';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
// import ReactStars from 'react-rating-stars-component';
import SoundAndFury from '../../assets/images/the-sound-and-the-fury.jpeg';
import Namesake from '../../assets/images/the-namesake.jpeg';
import Greenlights from '../../assets/images/greenlights.jpeg';
import HVRoad2 from '../../assets/images/hidden-valley-road2.jpeg';
import { styled } from '@mui/system';
import classes from './Books.module.css';

const BookCard = styled(Card)({
    width: "20vw"
})

const ContainerGrid = styled(Grid)({
    padding: "0 50px 0 50px"
})

const books = [
    {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        image: SoundAndFury,
        rating: 4,
        type: "EBOOK",
        price: "$4.99",
    },
    {
        title: "Hidden Valley Road: Inside the Mind of an American Family",
        author: "Robert Kolker",
        image: HVRoad2,
        rating: 4,
        type: "AUDIOBOOK",
        price: "$4.99",
    },
    {
        title: "Greenlights",
        author: "Matthew McConaughey",
        image: Greenlights,
        rating: 3,
        type: "EBOOK",
        price: "$4.99",
    },
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        image: Namesake,
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
        return <Grid item xs={12} sm={6} md={4}>
                    <BookCard>
                        <img className={classes.bookCover} src={book.image} alt="" />
                        <h2 className={classes.bookTitle}>{book.title}</h2>
                        <h4 className={classes.bookAuthor}>
                            <span className={classes.bookAuthorBy}>
                                by&nbsp;
                            </span>  
                            <span className={classes.bookAuthorName}>
                                {book.author}
                            </span>
                        </h4>
                        <h4 className={classes.bookType}>
                            {book.type === "EBOOK" ? <ChromeReaderModeOutlinedIcon className={classes.bookTypeIcon} /> : 
                            book.type === "AUDIOBOOK" ? <HeadphonesOutlinedIcon className={classes.bookTypeIcon} /> : 
                            <MenuBookOutlinedIcon />}&nbsp;
                            <span className={classes.bookTypeWord}>{book.type}</span></h4>
                        <h4 className={classes.bookRating}><BookRating rating={book.rating} /></h4>
                        <h3 className={classes.bookPrice}>{book.price}</h3>
                    </BookCard>
                </Grid>
    })

    return (
        <ContainerGrid container className={classes.gridContainer} spacing={15}>
            {bookList}
        </ContainerGrid>
    )
}

export default Books;
