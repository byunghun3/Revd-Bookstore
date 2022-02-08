import React, { useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { Card, TextField } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import { styled } from "@mui/system"
import classes from "./ReviewHistory.module.css"

const ReaderReviewCard = styled(Card)({
    position: "relative",
    overflow: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "2% 2%",
    borderBottom: "solid #adadad 1px",
    borderRadius: "0%"
})

const ReviewTextField = styled(TextField)({
    width: "60%",
    margin: "1% 0"
})

type Props = {}

const ReviewHistory = (props: Props) => {
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem("reviews") || "[]"))
    const [showAlert, setShowAlert] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editComments, setEditComments] = useState("")
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")

    const currentUserEmail = isLoggedIn ? currentUser[0].email : null

    const handleDeleteReview = (id: string) => {
        let newReview = reviews.filter((el: any) => el.id !== id)
        setReviews(newReview)
        localStorage.setItem("reviews", JSON.stringify(newReview))
    }

    const handleEditReview = () => {
        setIsEditing(!isEditing)
    }

    const reviewHistory = reviews.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <ReaderReviewCard key={el.id} elevation={0}>
            <ReaderRating rating={el.review.rating} />
            <div className={classes.readerReviewName}>
                {el.user.firstName}&nbsp;
                {el.user.lastName}
            </div>
            {isEditing ?
                <ReviewTextField
                    multiline
                    minRows={3}
                    label="Edit review..."
                    name="editComments"
                    type="text"
                    value={editComments}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEditComments(e.target.value) }}
                    required
                />
                : <div className={classes.readerReviewComments}>
                    {el.review.comments}
                </div>
            }
            <div className={classes.readerReviewDate}>{el.date}</div>
            <EditIcon
                onClick={(handleEditReview)}
            />
            <ClearIcon
                onClick={() => handleDeleteReview(el.id)}
            />
        </ReaderReviewCard>
    })
    return (
        <div>
            {reviewHistory}
        </div>
    )
}

export default ReviewHistory



