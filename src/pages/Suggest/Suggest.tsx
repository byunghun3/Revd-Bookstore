import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FormControl, Grid, TextField } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import { Button } from "@mui/material"
import { Books } from "../../components/Books/Books"
import { Data } from "../../Data"
import { styled } from "@mui/system"
import classes from "./Suggest.module.css"

const BrowseButton = styled(Button)({
    marginTop: "20px"
})

const TitleForm = styled(FormControl)({
    margin: "20px 0"
})

const CommentsForm = styled(FormControl)({
    margin: "20px 0",
    overflowWrap: "break-word"

})

const CommentsTextField = styled(TextField)({
    height: "150px",
    overflowWrap: "break-word"

})

const CommentsInput = styled(OutlinedInput)({
    height: "150px",
    wordWrap: "break-word"
})

interface Props {

}

export const Suggest = (props: Props) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [comments, setComments] = useState("")
    const books = Data

    const bookList = books.map(book => {
        return <Link key={book.id} to={`/browse/${book.id}`}>
            <img className={classes.bookCover} src={book.image} alt="" />
        </Link>
    })

    return (
        <div className={classes.suggestPage}>
            <div className={classes.pageContent}>
                <div className={classes.thankYou}>
                    Suggest a book for review!
                </div>
                <form className={classes.suggestForm}>
                    <TitleForm>
                        <InputLabel>Title</InputLabel>
                        <OutlinedInput
                            label="Title"
                            name="title"
                            type="text"
                            value={title}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}
                            required
                        />
                    </TitleForm>
                    <FormControl>
                        <InputLabel>Author</InputLabel>
                        <OutlinedInput
                            label="Author"
                            name="author"
                            type="text"
                            value={author}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAuthor(e.target.value) }}
                            required
                        />
                    </FormControl>
                    <CommentsTextField
                        multiline
                        minRows={3}
                        label="Comments..."
                        name="firstName"
                        type="text"
                        value={comments}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setComments(e.target.value) }}
                    />
                    {/* <CommentsForm>
                        <InputLabel>Comments...</InputLabel>
                        <CommentsInput
                            label="Comments..."
                            name="firstName"
                            type="text"
                            value={comments}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setComments(e.target.value) }}
                        />
                    </CommentsForm> */}
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
        </div>
    )
}
