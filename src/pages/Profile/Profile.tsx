import React, { useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import { Card, TextField } from "@mui/material"
import { EditIcon, ClearIcon } from "@mui/icons-material"
import { Button } from "@mui/material"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import { styled } from "@mui/system"
import classes from "./Profile.module.css"

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

interface Props {

}

export const Profile = (props: Props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    // const reviews = JSON.parse(localStorage.getItem("reviews") || "[]")
    const suggestion = JSON.parse(localStorage.getItem("suggestion") || "[]")
    // const [isLoggedIn, setIsLoggedIn] = useState(true)
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem("reviews") || "[]"))
    const [showAlert, setShowAlert] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editComments, setEditComments] = useState("")
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (currentUser.length) {
    //         setIsLoggedIn(true)
    //     } else { setIsLoggedIn(false) }
    // }, [currentUser])

    const handleClick = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("currentUser")
        navigate("/")
    }

    const handleDeleteReview = (id: string) => {
        let newReview = reviews.filter((el: any) => el.id !== id)
        setReviews(newReview)
        localStorage.setItem("reviews", JSON.stringify(newReview))
    }

    const handleEditReview = () => {
        setIsEditing(!isEditing)
    }

    const currentUserEmail = isLoggedIn ? currentUser[0].email : null

    // currentUser.find((el: any) => {
    //     return el.email
    // })



    const reviewHistory = reviews.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <ReaderReviewCard key={el.id} elevation={0}>
            <ReaderRating rating={el.review.rating} />
            <div className={classes.readerReviewName}>
                {el.user.firstName}&nbsp;
                {el.user.lastName}
            </div>
            <div className={classes.readerReviewComments}>{el.review.comments}</div>
            <div className={classes.readerReviewDate}>{el.date}</div>
            {isEditing ?
                <ReviewTextField
                    multiline
                    minRows={3}
                    label="Edit review..."
                    name="editComments"
                    type="text"
                    value={reviewComments}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setEditComments(e.target.value) }}
                    required
                />
                : <div className={classes.readerReviewComments}>
                    {el.review.comments}
                </div>
            }
            <EditIcon
                onClick={(handleEditReview)}
            />
            <ClearIcon
                onClick={() => handleDeleteReview(el.id)}
            />
        </ReaderReviewCard>
    })

    const suggestionHistory = suggestion.filter((el: any) => {
        return el.user.email === `${currentUserEmail}`
    }).map((el: any) => {
        return <div key={el.id}>
            {el.suggested.title}
            {el.suggested.author}
            {el.suggested.comments}
        </div>
    })

    return (
        <div className={classes.profilePage}>
            <div className={classes.pageContent}>
                Order History
                <OrderHistory />
                Review History
                {reviewHistory}
                Suggestion History
                {suggestionHistory}
                < Button onClick={handleClick}>Log Out</Button>
            </div>
        </div >
    )
}

