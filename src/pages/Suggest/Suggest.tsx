import React, { useEffect, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { FormControl, TextField } from "@mui/material"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import { LoginContext } from "../../contexts/LoginContext"
import { Books } from "../../components/Books/Books"
import { BooksData } from "../../data/BooksData"
import { styled } from "@mui/system"
import classes from "./Suggest.module.css"
import DialogComponent from "../../components/DialogComponent/DialogComponent"

const TitleForm = styled(FormControl)({
    margin: "1% 0",
    width: "30%"
})

const AuthorForm = styled(FormControl)({
    margin: "1% 0",
    width: "30%"
})

const CommentTextField = styled(TextField)({
    marginTop: "1%",
    width: "40%",
    fontSize: "1.5rem"
})

const StyledInputLabel = styled(InputLabel)({
    fontSize: "1.5rem"
})

const StyledOutlinedInput = styled(OutlinedInput)({
    fontSize: "1.5rem"
})

const SubmitButton = styled(Button)({
    margin: "2% 0",
    fontSize: "1.3rem"
})

const BrowseButton = styled(Button)({
    marginTop: "2%",
    fontSize: "1.3rem"
})

interface Props {

}

export const Suggest = (props: Props) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [comment, setComment] = useState("")
    const [suggestions, setSuggestions] = useState(JSON.parse(localStorage.getItem("suggestions") || "[]"))
    const [showDialog, setShowDialog] = useState(false)
    const { isLoggedIn } = useContext(LoginContext)
    const books = BooksData
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]")
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/suggest")
    }, [suggestions])

    const handleChangeSuggestionTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isLoggedIn) {
            setTitle(e.target.value)
        } else {
            setShowDialog(true)
        }
    }

    const handleChangeSuggestionAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isLoggedIn) {
            setAuthor(e.target.value)
        } else {
            setShowDialog(true)
        }
    }

    const handleChangeSuggestionComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isLoggedIn) {
            setComment(e.target.value)
        } else {
            setShowDialog(true)
        }
    }

    const handleSubmitSuggestion = () => {
        const thisDay = new Date().getDate()
        const thisMonth = new Date().getMonth() + 1
        const thisFullYear = new Date().getFullYear()

        if (currentUser.length) {
            let newSuggestion = [...suggestions]

            newSuggestion.push({
                id: uuidv4(),
                date: `${thisMonth}/${thisDay}/${thisFullYear}`,
                user:
                {
                    firstName: currentUser[0].firstName,
                    lastName: currentUser[0].lastName,
                    email: currentUser[0].email,
                    password: currentUser[0].password
                },
                suggested:
                {
                    title: title,
                    author: author,
                    comment: comment
                }
            })

            setSuggestions(newSuggestion)

            localStorage.setItem("suggestions", JSON.stringify(newSuggestion))
        } else {
            navigate("/login")
        }
    }

    const bookList = books.map(book => {
        return <Link key={book.id} to={`/browse/${book.id}`}>
            <img className={classes.bookCover} src={book.image} alt="" />
        </Link>
    })

    const handleCloseDialog = () => {
        setShowDialog(false)
    }

    const handleGoToLogin = () => {
        navigate("/login")
    }

    return (
        <div className={classes.suggestPage}>
            <div className={classes.pageContent}>
                <div className={classes.suggestTitle}>
                    Suggest a book for review!
                </div>
                <div className={classes.suggestContent}>
                    Let us know below if there&apos;s a book you want us to review and include in our collection.
                </div>
                <form className={classes.suggestForm} onSubmit={handleSubmitSuggestion}>
                    <TitleForm>
                        <StyledInputLabel>Title</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Title"
                            name="title"
                            type="text"
                            value={title}
                            onChange={handleChangeSuggestionTitle}
                            required
                        />
                    </TitleForm>
                    <AuthorForm>
                        <StyledInputLabel>Author</StyledInputLabel>
                        <StyledOutlinedInput
                            label="Author"
                            name="author"
                            type="text"
                            value={author}
                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAuthor(e.target.value) }}
                            onChange={handleChangeSuggestionAuthor}
                            required
                        />
                    </AuthorForm>
                    <CommentTextField
                        multiline
                        minRows={3}
                        label="Comment..."
                        name="comment"
                        type="text"
                        value={comment}
                        onChange={handleChangeSuggestionComment}
                        InputLabelProps={{ style: { fontSize: 15 } }}
                        InputProps={{ style: { fontSize: 15 } }}
                    />
                    <SubmitButton variant="contained" type="submit">
                        Submit
                    </SubmitButton>
                </form>
                <Link className={classes.browseLink} to="/browse">
                    <BrowseButton type="button">
                        Explore more books
                    </BrowseButton>
                </Link>
                <div className={classes.bookList}>
                    {bookList}
                </div>
            </div>
            <DialogComponent
                open={showDialog}
                onClose={handleCloseDialog}
                onClick={handleGoToLogin}
                contentText="Please log in to submit your suggestion"
                buttonText="Log In"
            />
            {/* <Dialog
                open={showAlert}
                onClose={handleCloseAlert}
            >
                <DialogContent>
                    <StyledDialogContentText>
                        Please log in to submit your review
                    </StyledDialogContentText>
                </DialogContent>
                <DialogActions>
                    <LogInButton onClick={handleGoToLogin}>Log In</LogInButton>
                </DialogActions>
            </Dialog> */}
        </div>
    )
}
