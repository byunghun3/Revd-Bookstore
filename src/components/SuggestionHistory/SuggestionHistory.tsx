import React, { FC, useState, useContext } from "react"
import { LoginContext } from "../../contexts/LoginContext"
import { Card, TextField } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import { styled } from "@mui/system"
import classes from "./SuggestionHistory.module.css"

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
    suggestedTitle: string
    suggestedAuthor: string
    suggestedComment: string
    date: string
}

const SuggestionHistory: FC<ReviewHistoryProps> = ({ initialComment, id,
    suggestedTitle, suggestedAuthor, suggestedComment, date }) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const currentUserEmail = isLoggedIn ? currentUser[0].email : null
    const [suggestions, setSuggestions] = useState(JSON.parse(localStorage.getItem("suggestions") || "[]"))
    const [editComment, setEditComment] = useState(suggestedComment)
    const [isEditing, setIsEditing] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditComment(e.currentTarget.value)
    }

    const handleDeleteSuggestion = (id: string) => {
        let newReviews = suggestions.filter((el: any) => el.id !== id)
        setSuggestions(newReviews)
        localStorage.setItem("suggestions", JSON.stringify(newReviews))
    }

    const handleEditSuggestion = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        const reviewDetails = suggestions.map((suggestion: any) => suggestion.id === id ?
            { ...suggestion, suggested: { ...suggestion.suggested, comment: suggestedComment } } :
            suggestion
        )
        console.log(id, reviewDetails)
        e.preventDefault()


        if (!isEditing) {
            setIsEditing(true)
        } else {
            setSuggestions(reviewDetails)
            localStorage.setItem("suggestions", JSON.stringify(reviewDetails))
            setIsEditing(false)
        }
    }

    return (
        <form className={classes.readerReviews} onSubmit={(e) => handleEditSuggestion(e, id)}>
            <ReaderReviewCard key={id} elevation={0}>
                <div className={classes.bookInfo}>
                    <div className={classes.bookTitle}>
                        {suggestedTitle}
                    </div>
                    <div className={classes.bookAuthor}>
                        {suggestedAuthor}
                    </div>
                </div>
                {isEditing ?
                    <ReviewTextField
                        multiline
                        minRows={3}
                        label="Edit suggestion..."
                        name="suggestedComment"
                        type="text"
                        value={suggestedComment}
                        onChange={handleChange}
                        required
                    />
                    : <div className={classes.suggestionComment}>
                        {suggestedComment}
                    </div>
                }
                <div className={classes.suggestionDate}>{date}</div>
                <div className={classes.suggestionIcons}>
                    <button className={classes.editButton} type="submit"><StyledEditIcon /></button>
                    <StyledRemoveIcon
                        color="warning"
                        onClick={() => handleDeleteSuggestion(id)}
                    />
                </div>
            </ReaderReviewCard>
        </form>
    )
}

export default SuggestionHistory



