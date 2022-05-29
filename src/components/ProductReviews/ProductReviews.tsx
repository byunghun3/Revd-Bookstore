import React, { FC, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Button, TextField } from "@mui/material";
import { AvgReaderRating } from "../AvgReaderRating/AvgReaderRating";
import { ReaderReviewsData } from "../../data/ReaderReviewsData";
import { DialogComponent } from "../DialogComponent/DialogComponent";
import { ReaderReview } from "../ReaderReview/ReaderReview";
import { IReview } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./ProductReviews.module.css";

interface ProductReviewsProps {
    id: number;
    rating: number;
    comment: string;
    open: boolean;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onRate: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClose: React.MouseEventHandler<any>;
    onLogIn: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
});

const ReviewTextField = styled(TextField)({
    margin: "1% 0",
    width: "60%",
    "@media (max-width: 499px)": {
        width: "100%"
    }
});

export const ProductReviews: FC<ProductReviewsProps> = ({ id, rating, comment, open, onSubmit, onRate, onChange, onClose, onLogIn }) => {
    const reviews: IReview[] = JSON.parse(localStorage.getItem("reviews") || "[]");
    const readerReviews = ReaderReviewsData;

    const hardCodedRatings = readerReviews.filter((review: IReview) => {
        return review.review.bookId === id;
    }).reduce((total: number, review: IReview) => {
        return total + review.review.rating;
    }, 0);

    const numOfHardCodedRatings = readerReviews.filter((review: IReview) => {
        return review.review.bookId === id;
    }).length;

    const numOfTotalRatings = numOfHardCodedRatings + reviews.filter((review: IReview) => {
        return review.review.bookId === id;
    }).length;

    const avgRating = reviews.filter((review: IReview) => {
        return review.review.bookId === id;
    }).reduce((total: number, review: IReview) => {
        return total + review.review.rating;
    }, (hardCodedRatings)) / numOfTotalRatings;

    const displayHardCodedReaderReviews = readerReviews.filter((review: IReview) => {
        return review.review.bookId === id;
    }).map((review: IReview) => {
        return <ReaderReview
            key={review.id}
            id={review.id}
            rating={review.review.rating}
            comment={review.review.comment}
            firstName={review.user.firstName}
            lastName={review.user.lastName}
            date={review.date}
        />;
    });

    const displayReaderReviews = reviews.filter((review: IReview) => {
        return review.review.bookId === id;
    }).map((review: IReview) => {
        return <ReaderReview
            key={review.id}
            id={review.id}
            rating={review.review.rating}
            comment={review.review.comment}
            firstName={review.user.firstName}
            lastName={review.user.lastName}
            date={review.date}
        />;
    });

    const handleStarRating = (rating: number) => {
        onRate(rating);
    };

    return (
        <div className={classes.productReviews}>
            <div className={classes.readerReviewsTitle}>Reader Reviews</div>
            <div className={classes.displayedReviews}>
                <div className={classes.avgReaderRating}>
                    <AvgReaderRating rating={avgRating} />
                    {avgRating ? avgRating.toFixed(1) : null}&nbsp;
                    ({numOfTotalRatings} {numOfTotalRatings === 1 ? "review" : "reviews"})
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
                <DialogComponent
                    open={open}
                    onClose={onClose}
                    contentText="Please log in to submit your review"
                    color="primary"
                    onClick={onLogIn}
                    buttonText="Log In"
                />
            </form>
        </div >
    );
};