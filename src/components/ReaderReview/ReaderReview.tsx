import React, { FC } from "react"
import { Rating } from "react-simple-star-rating"
import { Button, Card, TextField, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import AvgReaderRating from "../../components/AvgReaderRating/AvgReaderRating"
import { ReaderReviewsData } from "../../data/ReaderReviewsData"
import { styled } from "@mui/system"
import classes from "./ReaderReview.module.css"

const ReaderReviewCard = styled(Card)({
    position: "relative",
    overflow: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "2%",
    borderBottom: "solid #adadad 0.1rem",
    borderRadius: "0%"
})

const StyledButton = styled(Button)({
    fontSize: "1.5rem"
})

const ReviewTextField = styled(TextField)({
    width: "60%",
    margin: "1% 0"
})

const StyledDialogContentText = styled(DialogContentText)({
    fontSize: "1.6rem"
})

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

const ReaderReview: FC<ReaderReviewProps> = ({ id, rating, comment, open, onSubmit, onRate, onChange, onClose, onLogIn }) => {
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
        return <ReaderReviewCard key={el.id} elevation={0}>
            <ReaderRating rating={el.review.rating} />
            <div className={classes.readerReviewName}>
                {el.user.firstName}&nbsp;
                {el.user.lastName}
            </div>
            <div className={classes.readerReviewComments}>{el.review.comments}</div>
            <div className={classes.readerReviewDate}>{el.date}</div>
        </ReaderReviewCard>
    })

    const displayReaderReviews = reviews.filter((el: any) => {
        return el.review.bookId === id
    }).map((el: any) => {
        return <ReaderReviewCard key={el.id} elevation={0}>
            <ReaderRating rating={el.review.rating} />
            <div className={classes.readerReviewName}>
                {el.user.firstName}&nbsp;
                {el.user.lastName}
            </div>
            <div className={classes.readerReviewComments}>{el.review.comments}</div>
            <div className={classes.readerReviewDate}>{el.date}</div>
        </ReaderReviewCard>
    })

    const handleStarRating = (rating: number) => {
        onRate(rating)
    }

    return (
        <div>
            <div className={classes.readerReviewsTitle}>Reader Reviews</div>
            <div>
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
            <form className={classes.readerReviewsForm} onSubmit={onSubmit}>
                <div className={classes.submitRatingAndButton}>
                    <Rating
                        onClick={handleStarRating}
                        ratingValue={rating}
                        allowHalfIcon
                        fillColor="#FDCC0D"
                        emptyColor="#EEE"
                    />
                    <StyledButton variant="outlined" type="submit">Submit</StyledButton>
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
            </form>
            <Dialog
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
            </Dialog>
        </div >
    )
}

export default ReaderReview
