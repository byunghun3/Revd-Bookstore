import React, { FC } from "react"
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import AccordionComponent from "../../components/AccordionComponent/AccordionComponent"
import BookRating from "../../components/BookRating/BookRating"
import { styled } from "@mui/system"
import classes from "./ProductDetails.module.css"

const BookDetailsCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    margin: "10vh auto 0 auto",
    width: "60%",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    "@media (max-width: 499px)": {
        margin: "0 auto",
        width: "80%"
    }
})

const StyledButton = styled(Button)({
    fontSize: "1.5rem"
})

interface ProductDetailsProps {
    title: string
    author: string
    rating: number
    type: string
    price: number
    sale: number
    stock: number
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

const ProductDetails: FC<ProductDetailsProps> = ({ title, author, rating, type, price, sale, stock, onSubmit }) => {
    return (
        <BookDetailsCard>
            <form className={classes.bookDetails} onSubmit={onSubmit}>
                <div className={classes.bookTitle}>{title}</div>
                <div className={classes.bookAuthor}>
                    <span className={classes.bookAuthorBy}>
                        by&nbsp;
                    </span>
                    <span className={classes.bookAuthorName}>
                        {author}
                    </span>
                </div>
                <div className={classes.bookType}>
                    <div className={classes.bookTypeWord}>{type}</div>
                </div>
                <div className={classes.bookRating}><BookRating rating={rating} /></div>
                <div className={`${sale > 0 ? classes.bookPriceStrike : classes.bookPrice}`}>${price}</div>
                {sale > 0 ? <div className={classes.bookPrice}>${(price - (price * sale)).toFixed(2)}</div> : null}
                <StyledButton variant="outlined" type="submit">Add to Cart</StyledButton>
                {stock < 4 ?
                    <div className={classes.bookStock}>
                        Only {stock} books left in stock
                    </div> :
                    <div className={classes.bookStock}>
                    </div>}
            </form>
        </BookDetailsCard>
    )
}

export default ProductDetails
