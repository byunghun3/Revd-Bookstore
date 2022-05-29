import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Card, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { ReaderRating } from "../../components/ReaderRating/ReaderRating";
import { IReview } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./ReviewHistory.module.css";

interface ReviewHistoryProps {
    initialComment: string;
    bookId: number;
    id: string;
    reviewRating: number;
    reviewTitle: string;
    reviewAuthor: string;
    date: string;
}

const ReviewCard = styled(Card)({
    position: "relative",
    overflow: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "2%",
    borderBottom: "solid #adadad 1px",
    borderRadius: "0%",
    "@media (max-width: 499px)": {
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem 0.5rem"
    }
});

const ReviewTextField = styled(TextField)({
    flex: "3",
    margin: "1% 0"
});

const StyledEditIcon = styled(EditIcon)({
    marginBottom: "0.5rem",
    fontSize: "2rem",
    "&:hover": {
        cursor: "pointer"
    },
    "@media (max-width: 499px)": {
        marginRight: "1rem",
        marginBottom: "0"
    }
});

const StyledRemoveIcon = styled(ClearIcon)({
    marginTop: "0.5rem",
    fontSize: "2rem",
    "&:hover": {
        cursor: "pointer"
    },
    "@media (max-width: 499px)": {
        marginTop: "0",
        marginLeft: "1rem"
    }
});

const StyledDialogContentText = styled(DialogContentText)({
    fontSize: "1.6rem"
});

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
});

export const ReviewHistory: FC<ReviewHistoryProps> = ({ initialComment, bookId, id, reviewRating,
    reviewTitle, reviewAuthor, date }) => {
    const [reviews, setReviews] = useState<IReview[]>(JSON.parse(localStorage.getItem("reviews") || "[]"));
    const [editComments, setEditComments] = useState<string>(initialComment);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleExpand = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
            setIsExpanded(true);
        } else if (isExpanded) {
            setIsExpanded(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEditComments(e.currentTarget.value);
    };

    const handleEditReview = (e: React.FormEvent<HTMLFormElement>, id: string): void => {
        e.preventDefault();
        const reviewDetails = reviews.map((review: IReview) => review.id === id ?
            { ...review, review: { ...review.review, comment: editComments } } :
            review
        );

        if (!isEditing) {
            setIsEditing(true);
        } else {
            setReviews(reviewDetails);
            localStorage.setItem("reviews", JSON.stringify(reviewDetails));
            setIsEditing(false);
        }
    };

    const handleCloseDialog = (): void => {
        setShowDialog(false);
    };

    const handleDeleteReview = (id: string): void => {
        let newReviews = reviews.filter((review: IReview) => review.id !== id);
        setReviews(newReviews);
        localStorage.setItem("reviews", JSON.stringify(newReviews));
        setShowDialog(false);
        window.location.reload();
    };

    return (
        <form className={classes.readerReviews} onSubmit={(e) => handleEditReview(e, id)}>
            <ReviewCard key={id} elevation={0}>
                <ReaderRating rating={reviewRating} />
                <div className={classes.bookInfo}>
                    <Link className={classes.link} to={`/browse/${bookId}`}>
                        <div className={classes.bookTitle}>
                            {reviewTitle}
                        </div>
                    </Link>
                    <div className={classes.bookAuthor}>
                        {reviewAuthor}
                    </div>
                </div>
                {isEditing ?
                    <ReviewTextField
                        multiline
                        minRows={3}
                        label="Edit review..."
                        name="editComments"
                        type="text"
                        value={editComments}
                        onChange={handleChange}
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        InputProps={{ style: { fontSize: 15 } }}
                        required
                    />
                    :
                    <div className={`${isExpanded ? classes.readerReviewCommentExpanded : classes.readerReviewComment}`} onClick={(e) => handleExpand(e)}>{editComments}</div>
                }
                <div className={classes.readerReviewDate}>{date}</div>
                <div className={classes.readerReviewIcons}>
                    <button className={classes.editButton} type="submit"><StyledEditIcon /></button>
                    <StyledRemoveIcon
                        color="warning"
                        onClick={() => { setShowDialog(true); }}
                    />
                </div>
                <Dialog
                    open={showDialog}
                    onClose={handleCloseDialog}
                >
                    <DialogContent>
                        <StyledDialogContentText>
                            Are you sure you want to delete this review?
                        </StyledDialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <StyledButton type="button" onClick={() => handleDeleteReview(id)}>Delete</StyledButton>
                    </DialogActions>
                </Dialog>
            </ReviewCard>
        </form >
    );
};