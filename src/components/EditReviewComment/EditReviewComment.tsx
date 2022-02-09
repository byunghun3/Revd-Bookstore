import React, { FC, useState } from "react"
import { TextField } from "@mui/material"
import { styled } from "@mui/system"

const ReviewTextField = styled(TextField)({
    flex: "3",
    margin: "1% 0"
})

interface EditReviewCommentProps {
    initialComment: string
    // onChange: React.ChangeEventHandler<HTMLInputElement>
}

const EditReviewComment: FC<EditReviewCommentProps> = ({ initialComment }) => {
    const [editComments, setEditComments] = useState(initialComment)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditComments(e.currentTarget.value)
    }
    return (
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
    )
}

export default EditReviewComment
