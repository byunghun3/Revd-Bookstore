import React, { FC, useState } from "react"
import { Button, Card, TextField } from "@mui/material"
import ReaderRating from "../../components/ReaderRating/ReaderRating"
import { styled } from "@mui/system"
import classes from "./ReaderReview.module.css"

const ReaderReviewCard = styled(Card)({
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
        // height: "25vh"
        // height: "200px"
    }
})

const StyledButton = styled(Button)({
    fontSize: "1.3rem"
})

const ReviewTextField = styled(TextField)({
    width: "60%",
    margin: "1% 0"
})

interface ReaderReviewProps {
    id: number
    rating: number
    comment: string
    firstName: string
    lastName: string
    date: string
    // onClick: React.MouseEventHandler<HTMLDivElement>
}

const ReaderReview: FC<ReaderReviewProps> = ({ id, rating, comment, firstName, lastName, date }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showEllipsis, setShowEllipsis] = useState(false)

    const handleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsExpanded(!isExpanded)
        console.log(e.currentTarget.clientHeight, e.currentTarget.scrollHeight)
    }

    return (
        <ReaderReviewCard key={id} elevation={0}>
            <ReaderRating rating={rating} />
            <div className={classes.readerReviewName}>
                {firstName}&nbsp;
                {lastName}
            </div>
            <div className={`${isExpanded ? classes.readerReviewCommentExpanded : classes.readerReviewComment}`} onClick={(e) => handleExpand(e)}>{comment}</div>
            <div className={classes.readerReviewDate}>{date}</div>
        </ReaderReviewCard >
    )
}

export default ReaderReview
