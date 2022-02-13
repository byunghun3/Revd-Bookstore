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
    width: "60%",
    marginTop: "10vh"
})

interface ProductDetailsProps {
    title: string
    author: string
    rating: number
    type: string
    price: number
    stock: number
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

const ProductDetails: FC<ProductDetailsProps> = ({ title, author, rating, type, price, stock, onSubmit }) => {
    return (
        <BookDetailsCard>
            <form className={classes.bookDetails} onSubmit={onSubmit}>
                {title}
                <div className={classes.bookAuthor}>
                    <span className={classes.bookAuthorBy}>
                        by&nbsp;
                    </span>
                    <span className={classes.bookAuthorName}>
                        {author}
                    </span>
                </div>
                <h4 className={classes.bookType}>
                    <div className={classes.bookTypeWord}>{type}</div></h4>
                <h4 className={classes.bookRating}><BookRating rating={rating} /></h4>
                <h3 className={classes.bookPrice}>${price}</h3>
                <Button type="submit">Add to Cart</Button>
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
