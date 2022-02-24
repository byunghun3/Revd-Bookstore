import React, { FC, useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Card, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import { styled } from "@mui/system"
import classes from "./ReviewHistory.module.css"
import DialogComponent from "../DialogComponent/DialogComponent"
import { useNavigate } from "react-router-dom"

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
        justifyContent: "space-between"
    }
})

const ReviewTextField = styled(TextField)({
    flex: "3",
    margin: "1% 0"
})

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
})

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
})

const StyledDialogContentText = styled(DialogContentText)({
    fontSize: "1.6rem"
})

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
})

interface ReviewHistoryProps {
    initialComment: string
    bookId: number
    id: string
    reviewRating: number
    reviewTitle: string
    reviewAuthor: string
    // reviewComment: string
    date: string
}

const ReviewHistory: FC<ReviewHistoryProps> = ({ initialComment, bookId, id, reviewRating,
    reviewTitle, reviewAuthor, date }) => {
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem("reviews") || "[]"))
    const [editComments, setEditComments] = useState(initialComment)
    const [showDialog, setShowDialog] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const navigate = useNavigate()

    const handleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
            setIsExpanded(true)
        } else if (isExpanded) {
            setIsExpanded(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditComments(e.currentTarget.value)
    }

    const handleEditReview = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault()
        const reviewDetails = reviews.map((el: any) => el.id === id ?
            { ...el, review: { ...el.review, comment: editComments } } :
            el
        )
        console.log(id, reviewDetails)


        if (!isEditing) {
            setIsEditing(true)
        } else {
            setReviews(reviewDetails)
            localStorage.setItem("reviews", JSON.stringify(reviewDetails))
            setIsEditing(false)
        }
    }

    const handleCloseDialog = () => {
        setShowDialog(false)
    }

    const handleDeleteReview = (id: string) => {
        let newReviews = reviews.filter((el: any) => el.id !== id)
        setReviews(newReviews)
        localStorage.setItem("reviews", JSON.stringify(newReviews))
        setShowDialog(false)
        window.location.reload()
    }

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
                        onClick={() => { setShowDialog(true) }}
                    />
                </div>
                {/* <DialogComponent
                    open={showDialog}
                    onClose={handleCloseDialog}
                    onClick={handleDeleteReview}
                    ContentText="Are you sure you want to delete this review?"
                    ButtonText="Delete"
                /> */}
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
                        {/* <form onSubmit={() => handleDeleteReview(id)}> */}
                        {/* <StyledButton type="submit">Delete</StyledButton> */}
                        <StyledButton type="button" onClick={() => handleDeleteReview(id)}>Delete</StyledButton>
                        {/* </form> */}
                    </DialogActions>
                </Dialog>
            </ReviewCard>
        </form >
    )
}

export default ReviewHistory



