import React, { FC, useState, useContext } from "react"
import { Card, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ClearIcon from "@mui/icons-material/Clear"
import { styled } from "@mui/system"
import classes from "./SuggestionHistory.module.css"
import DialogComponent from "../DialogComponent/DialogComponent"

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

const StyledDialogContentText = styled(DialogContentText)({
    fontSize: "1.6rem"
})

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
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
    const [showDialog, setShowDialog] = useState(false)

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

    const handleCloseDialog = () => {
        setShowDialog(false)
    }

    const handleDeleteSuggestion = (id: string) => {
        let newSuggestions = suggestions.filter((el: any) => el.id !== id)
        setSuggestions(newSuggestions)
        localStorage.setItem("suggestions", JSON.stringify(newSuggestions))
        setShowDialog(false)
        window.location.reload()
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
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        InputProps={{ style: { fontSize: 15 } }}
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
                        onClick={() => { setShowDialog(true) }}
                    />
                </div>
                {/* <DialogComponent
                    open={showDialog}
                    onClose={handleCloseDialog}
                    onClick={() => handleDeleteSuggestion(id)}
                    ContentText="Are you sure you want to delete this suggestion?"
                    ButtonText="Delete"
                /> */}
                <Dialog
                    open={showDialog}
                    onClose={handleCloseDialog}
                >
                    <DialogContent>
                        <StyledDialogContentText>
                            Are you sure you want to delete this suggestion?
                        </StyledDialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <StyledButton onClick={() => handleDeleteSuggestion(id)}>Delete</StyledButton>
                    </DialogActions>
                </Dialog>
            </SuggestionCard>
        </form>
    )
}

export default SuggestionHistory



