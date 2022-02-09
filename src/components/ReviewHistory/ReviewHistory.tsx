import React, { FC, useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { Card, TextField } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import { styled } from "@mui/system"
import classes from "./ReviewHistory.module.css"
import EditReviewComment from "../EditReviewComment/EditReviewComment"

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
    flex: "3",
    margin: "1% 0"
})

const StyledEditIcon = styled(EditIcon)({
    marginBottom: "3%",
    "&:hover": {
        cursor: "pointer"
    }
})

const StyledRemoveIcon = styled(ClearIcon)({
    marginTop: "3%",
    "&:hover": {
        cursor: "pointer"
    }
})

interface ReviewHistoryProps {
    initialComment: string
    // onChange: React.ChangeEventHandler<HTMLInputElement>
    // handleEdit: React.MouseEventHandler<any>
    id: string
    reviewRating: number
    reviewTitle: string
    reviewAuthor: string
    reviewComment: string
    date: string
}

const ReviewHistory: FC<ReviewHistoryProps> = ({ initialComment, id, reviewRating,
    reviewTitle, reviewAuthor, reviewComment, date }) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const currentUserEmail = isLoggedIn ? currentUser[0].email : null
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem("reviews") || "[]"))
    const [editComments, setEditComments] = useState(initialComment)

    const initialReviewComment = reviews.filter((review: any) => {
        return review.user.email === `${currentUserEmail}`
    }).filter((el: any) => {
        return el.id
    })

    const [showAlert, setShowAlert] = useState(false)
    const [isEditing, setIsEditing] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditComments(e.currentTarget.value)
        // console.log(editComments)
    }

    const handleDeleteReview = (id: string) => {
        let newReviews = reviews.filter((el: any) => el.id !== id)
        setReviews(newReviews)
        localStorage.setItem("reviews", JSON.stringify(newReviews))
    }

    const handleEditReview = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        // let review = reviews.find((el: any) => el.id === id)
        console.log(editComments)
        const reviewDetails = reviews.map((el: any) => el.id === id ?
            { ...el, review: { ...el.review, comments: editComments } } :
            el
        )
        // find((el: any) => el.review)
        // let find = reviews.filter((el: any) => el.id === id).map((el: any) => {...el.review, comments: editComments})
        // console.log(review)
        // console.log(find)
        console.log(id, reviewDetails)
        e.preventDefault()


        if (!isEditing) {
            setIsEditing(true)
        } else {
            // let newReview = { ...review, review: { ...reviewDetails, comments: editComments } }
            // let newReview = [...reviews, review: { ...reviewDetails, comments: editComments }]

            // console.log(reviewDetails)
            setReviews(reviewDetails)
            localStorage.setItem("reviews", JSON.stringify(reviewDetails))
            // handleEdit(id, editComments)
            setIsEditing(false)
        }
    }

    return (
        <form className={classes.readerReviews} onSubmit={(e) => handleEditReview(e, id)}>
            <ReaderReviewCard key={id} elevation={0}>
                <ReaderRating rating={reviewRating} />
                <div className={classes.readerReviewName}>
                    {reviewTitle}&nbsp;
                    {reviewAuthor}
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
                        required
                    />
                    : <div className={classes.readerReviewComments}>
                        {editComments}
                    </div>
                }
                <div className={classes.readerReviewDate}>{date}</div>
                <div className={classes.readerReviewIcons}>
                    <button className={classes.editButton} type="submit"><StyledEditIcon /></button>
                    <StyledRemoveIcon
                        color="warning"
                        onClick={() => handleDeleteReview(id)}
                    />
                </div>
            </ReaderReviewCard>
        </form>
    )
}

export default ReviewHistory



