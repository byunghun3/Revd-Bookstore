import React, { FC, useState, useContext } from "react"
import { Card, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import { styled } from "@mui/system"
import classes from "./SuggestionHistory.module.css"

const SuggestionCard = styled(Card)({
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

const ReviewTextField = styled(TextField)({
    flex: "3",
    margin: "1% 0"
})

const StyledEditIcon = styled(EditIcon)({
    marginBottom: "0.5rem",
    fontSize: "2rem",
    "&:hover": {
        cursor: "pointer"
    }
})

const StyledRemoveIcon = styled(ClearIcon)({
    marginTop: "0.5rem",
    fontSize: "2rem",
    "&:hover": {
        cursor: "pointer"
    }
})

interface ReviewHistoryProps {
    id: string
    suggestedTitle: string
    suggestedAuthor: string
    suggestedComment: string
    date: string
}

const SuggestionHistory: FC<ReviewHistoryProps> = ({ id, suggestedTitle,
    suggestedAuthor, suggestedComment, date }) => {
    const [suggestions, setSuggestions] = useState(JSON.parse(localStorage.getItem("suggestions") || "[]"))
    const [editComment, setEditComment] = useState(suggestedComment)
    const [isEditing, setIsEditing] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditComment(e.currentTarget.value)
    }

    const handleEditSuggestion = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        const reviewDetails = suggestions.map((suggestion: any) => suggestion.id === id ?
            { ...suggestion, suggested: { ...suggestion.suggested, comment: editComment } } :
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

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const handleDeleteSuggestion = (id: string) => {
        let newSuggestions = suggestions.filter((el: any) => el.id !== id)
        setSuggestions(newSuggestions)
        localStorage.setItem("suggestions", JSON.stringify(newSuggestions))
    }

    return (
        <form className={classes.suggestion} onSubmit={(e) => handleEditSuggestion(e, id)}>
            <SuggestionCard key={id} elevation={0}>
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
                        name="editComment"
                        type="text"
                        value={editComment}
                        onChange={handleChange}
                        required
                    />
                    : <div className={classes.suggestionComment}>
                        {editComment}
                    </div>
                }
                <div className={classes.suggestionDate}>{date}</div>
                <div className={classes.suggestionIcons}>
                    <button className={classes.editButton} type="submit"><StyledEditIcon /></button>
                    <StyledRemoveIcon
                        color="warning"
                        onClick={() => { setShowAlert(true) }}
                    />
                </div>
                <Dialog
                    open={showAlert}
                    onClose={handleCloseAlert}
                >
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this suggestion?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleDeleteSuggestion(id)}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </SuggestionCard>
        </form>
    )
}

export default SuggestionHistory



