import React, { FC, useState } from "react";
import { Card, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { ISuggestion } from "../../interfaces/Interfaces";
import { styled } from "@mui/system";
import classes from "./SuggestionHistory.module.css";

interface SuggestionHistoryProps {
    id: string;
    suggestedTitle: string;
    suggestedAuthor: string;
    suggestedComment: string;
    date: string;
}

const SuggestionCard = styled(Card)({
    position: "relative",
    overflow: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "2%",
    borderBottom: "solid #adadad 0.1rem",
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

export const SuggestionHistory: FC<SuggestionHistoryProps> = ({ id, suggestedTitle,
    suggestedAuthor, suggestedComment, date }) => {
    const [suggestions, setSuggestions] = useState<ISuggestion[]>(JSON.parse(localStorage.getItem("suggestions") || "[]"));
    const [comment, setComment] = useState<string>(suggestedComment);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleExpand = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
            setIsExpanded(true);
        } else if (isExpanded) {
            setIsExpanded(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setComment(e.currentTarget.value);
    };

    const handleEditSuggestion = (e: React.FormEvent<HTMLFormElement>, id: string): void => {
        const reviewDetails = suggestions.map((suggestion: ISuggestion) => suggestion.id === id ?
            { ...suggestion, suggested: { ...suggestion.suggested, comment: comment } } :
            suggestion
        );
        console.log(id, reviewDetails);
        e.preventDefault();

        if (!isEditing) {
            setIsEditing(true);
        } else {
            setSuggestions(reviewDetails);
            localStorage.setItem("suggestions", JSON.stringify(reviewDetails));
            setIsEditing(false);
        }
    };

    const handleCloseDialog = (): void => {
        setShowDialog(false);
    };

    const handleDeleteSuggestion = (id: string): void => {
        let newSuggestions = suggestions.filter((suggestion: ISuggestion) => suggestion.id !== id);
        setSuggestions(newSuggestions);
        localStorage.setItem("suggestions", JSON.stringify(newSuggestions));
        setShowDialog(false);
        window.location.reload();
    };

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
                        name="comment"
                        type="text"
                        value={comment}
                        onChange={handleChange}
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        InputProps={{ style: { fontSize: 15 } }}
                        required
                    />
                    : <div className={`${isExpanded ? classes.suggestionCommentExpanded : classes.suggestionComment}`} onClick={(e) => handleExpand(e)}>
                        {comment}
                    </div>
                }
                <div className={classes.suggestionDate}>{date}</div>
                <div className={classes.suggestionIcons}>
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
                            Are you sure you want to delete this suggestion?
                        </StyledDialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <StyledButton type="button" onClick={() => handleDeleteSuggestion(id)}>Delete</StyledButton>
                    </DialogActions>
                </Dialog>
            </SuggestionCard>
        </form>
    );
};