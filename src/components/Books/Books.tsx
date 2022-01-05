import { FC } from 'react';
import BookRating from '../BookRating/BookRating';
import { Card } from '@mui/material';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { styled } from '@mui/system';
import classes from './Books.module.css';

const BookCard = styled(Card)({
    width: "20vw",
    "&:hover": {
        opacity: "0.5",
        transform: "scale(1.05)",
        cursor: "pointer"
    } 
})

type BooksProps = {
    title: string;
    author: string;
    image: any;
    rating: number;
    type?: string;
    price: number;
}

export const Books: FC<BooksProps> = ({ title, author, image, rating, type, price }) => {
    return (
        <div>
                <BookCard>
                    <img className={classes.bookCover} src={image} alt="" />
                    <h2 className={classes.bookTitle}>{title}</h2>
                    <h4 className={classes.bookAuthor}>
                    <span className={classes.bookAuthorBy}>
                        by&nbsp;
                    </span>  
                    <span className={classes.bookAuthorName}>
                                {author}
                            </span>
                        </h4>
                        <h4 className={classes.bookType}>
                            {type === "EBOOK" ? <ChromeReaderModeOutlinedIcon className={classes.bookTypeIcon} /> : 
                            type === "AUDIOBOOK" ? <HeadphonesOutlinedIcon className={classes.bookTypeIcon} /> : 
                            <MenuBookOutlinedIcon />}&nbsp;
                            <span className={classes.bookTypeWord}>{type}</span></h4>
                        <h4 className={classes.bookRating}><BookRating rating={rating} /></h4>
                        <h3 className={classes.bookPrice}>${price}</h3>
                    </BookCard>
        </div>
    )
}


// export default Books;