import { useState, FC } from 'react';
import BookRating from '../BookRating/BookRating';
import { Card } from '@mui/material';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import DetailsIcon from '@mui/icons-material/Details';
import { styled } from '@mui/system';
import classes from './Books.module.css';

const BookCard = styled(Card)({
    position: "relative",
    width: "20vw",
    transition: "ease 0.3s",
    "&:hover": {
        opacity: "0.8",
    }
})

const Info = styled(SearchIcon)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "50px",
    color: "rgba(0, 0, 0, 1)",
})

const Cart = styled(ShoppingCartIcon)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "50px",
    color: "rgba(0, 0, 0, 1)"
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
    const [showDetails, setShowDetails] = useState(false)

    const handleMouseOver = () => {
        setShowDetails(true)
    }

    const handleMouseLeave = () => {
        setShowDetails(false)
    }

    return (
        <div>
            <BookCard onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                {showDetails &&
                    <span className={classes.bookAction}>
                        <div className={classes.iconBackground}>
                            <Info />
                        </div>
                        <div className={classes.iconBackground}>
                            <Cart />
                        </div>
                    </span>}
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