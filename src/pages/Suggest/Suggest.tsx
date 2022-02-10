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

const BrowseButton = styled(Button)({
    marginTop: "20px"
})

const TitleForm = styled(FormControl)({
    width: "30%",
    margin: "1% 0"
})

const AuthorForm = styled(FormControl)({
    width: "30%",
    margin: "1% 0"
})

const CommentsTextField = styled(TextField)({
    width: "40%",
    margin: "1% 0"
})

interface Props {

}

export const Suggest = (props: Props) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [comment, setComment] = useState("")
    const [suggestions, setSuggestions] = useState(JSON.parse(localStorage.getItem("suggestions") || "[]"))
    const [showAlert, setShowAlert] = useState(false)
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
            setShowAlert(true)
        }
    }

    const handleChangeSuggestionAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isLoggedIn) {
            setAuthor(e.target.value)
        } else {
            setShowAlert(true)
        }
    }

    const handleChangeSuggestionComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isLoggedIn) {
            setComment(e.target.value)
        } else {
            setShowAlert(true)
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

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const handleGoToLogin = () => {
        navigate("/login")
    }

    return (
        <div className={classes.suggestPage}>
            <div className={classes.pageContent}>
                <div className={classes.firstLine}>
                    Suggest a book for review!
                </div>
                <div>
                    Let us know below if there&apos;s a book you want us to review and put up
                </div>
                <form className={classes.suggestForm} onSubmit={handleSubmitSuggestion}>
                    <TitleForm>
                        <InputLabel>Title</InputLabel>
                        <OutlinedInput
                            label="Title"
                            name="title"
                            type="text"
                            value={title}
                            onChange={handleChangeSuggestionTitle}
                            required
                        />
                    </TitleForm>
                    <AuthorForm>
                        <InputLabel>Author</InputLabel>
                        <OutlinedInput
                            label="Author"
                            name="author"
                            type="text"
                            value={author}
                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAuthor(e.target.value) }}
                            onChange={handleChangeSuggestionAuthor}
                            required
                        />
                    </AuthorForm>
                    <CommentsTextField
                        multiline
                        minRows={3}
                        label="Comment..."
                        name="comment"
                        type="text"
                        value={comment}
                        onChange={handleChangeSuggestionComment}
                    />
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <Link className={classes.browseLink} to="/browse">
                    <BrowseButton>
                        Explore more books
                    </BrowseButton>
                </Link>
                <div className={classes.bookList}>
                    {bookList}
                </div>
            </div>
            <Dialog
                open={showAlert}
                onClose={handleCloseAlert}
            >
                <DialogContent>
                    <DialogContentText>
                        Please log in to submit your review
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleGoToLogin}>Log In</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
