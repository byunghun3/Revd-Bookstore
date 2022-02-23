import React, { FC, useState } from "react"
import { Rating } from "react-simple-star-rating"
import { Button, Card, TextField, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import ReaderRating from "../ReaderRating/ReaderRating"
import AvgReaderRating from "../AvgReaderRating/AvgReaderRating"
import { ReaderReviewsData } from "../../data/ReaderReviewsData"
import { styled } from "@mui/system"
import classes from "./ProductReviews.module.css"
import DialogComponent from "../DialogComponent/DialogComponent"
import ReaderReview from "../ReaderReview/ReaderReview"

interface ReaderReviewProps {
    id: number
    rating: number
    comment: string
    open: boolean
    onSubmit: React.FormEventHandler<HTMLFormElement>
    // onRate: React.MouseEventHandler<any>
    onRate: any
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onClose: any
    onLogIn: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
})

const ReviewTextField = styled(TextField)({
    margin: "1% 0",
    width: "60%",
    "@media (max-width: 499px)": {
        width: "100%"
    }
})

const ProductReview: FC<ReaderReviewProps> = ({ id, rating, comment, open, onSubmit, onRate, onChange, onClose, onLogIn }) => {
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
    const readerReviews = ReaderReviewsData

    const hardCodedRatings = readerReviews.filter((el: any) => {
        return el.review.bookId === id
    }).reduce((total: number, el: any) => {
        return total + el.review.rating
    }, 0)

    const numOfHardCodedRatings = readerReviews.filter((el: any) => {
        return el.review.bookId === id
    }).length

    const numOfTotalRatings = numOfHardCodedRatings + reviews.filter((el: any) => {
        return el.review.bookId === id
    }).length

    const avgRating = reviews.filter((el: any) => {
        return el.review.bookId === id
    }).reduce((total: number, el: any) => {
        return total + el.review.rating
    }, (hardCodedRatings)) / numOfTotalRatings

    const displayHardCodedReaderReviews = readerReviews.filter((el: any) => {
        return el.review.bookId === id
    }).map((el: any) => {
        return <ReaderReview
            key={el.id}
            id={el.id}
            rating={el.review.rating}
            comment={el.review.comment}
            firstName={el.user.firstName}
            lastName={el.user.lastName}
            date={el.date}
        // onClick={handleExpand}
        />
    })

    const displayReaderReviews = reviews.filter((el: any) => {
        return el.review.bookId === id
    }).map((el: any) => {
        return <ReaderReview
            key={el.id}
            id={el.id}
            rating={el.review.rating}
            comment={el.review.comment}
            firstName={el.user.firstName}
            lastName={el.user.lastName}
            date={el.date}
        />
    })

    const handleStarRating = (rating: number) => {
        onRate(rating)
    }

    return (
        <div className={classes.productReviews}>
            <div className={classes.readerReviewsTitle}>Reader Reviews</div>
            <div className={classes.displayedReviews}>
                <div className={classes.avgReaderRating}>
                    <AvgReaderRating rating={avgRating} />
                    {avgRating ? avgRating.toFixed(1) : null}&nbsp;
                    ({numOfTotalRatings} reviews)
                </div>
                <div className={classes.readerReviews}>
                    {displayHardCodedReaderReviews}
                    {displayReaderReviews}
                </div>
            </div>
            <form className={classes.submitReviewForm} onSubmit={onSubmit}>
                <div className={classes.submitRatingAndButton}>
                    <Rating
                        onClick={handleStarRating}
                        ratingValue={rating}
                        allowHalfIcon
                        fillColor="#FDCC0D"
                        emptyColor="#EEE"
                    />
                    <StyledButton variant="contained" type="submit">Submit</StyledButton>
                </div>
                <ReviewTextField
                    multiline
                    minRows={3}
                    label="Leave a review..."
                    name="reviewComments"
                    type="text"
                    value={comment}
                    onChange={onChange}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    InputProps={{ style: { fontSize: 15 } }}
                    required
                />
                <DialogComponent
                    open={open}
                    onClose={onClose}
                    contentText="Please log in to submit your review"
                    color="primary"
                    onClick={onLogIn}
                    buttonText="Log In"
                />
            </form>

            {/* <Dialog
                open={open}
                onClose={onClose}
            >
                <DialogContent>
                    <StyledDialogContentText>
                        Please log in to submit your review
                    </StyledDialogContentText>
                </DialogContent>
                <DialogActions>
                    <StyledButton onClick={onLogIn}>Log In</StyledButton>
                </DialogActions>
            </Dialog> */}
        </div >
    )
}

export default ProductReview
