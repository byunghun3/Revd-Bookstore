import React, { FC, useState } from "react";
import { Card } from "@mui/material";
import { ReaderRating } from "../../components/ReaderRating/ReaderRating";
import { styled } from "@mui/system";
import classes from "./ReaderReview.module.css";

interface ReaderReviewProps {
    id: string;
    rating: number;
    comment: string;
    firstName: string | null;
    lastName: string | null;
    date: string;
}

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
        justifyContent: "space-between"
    }
});

export const ReaderReview: FC<ReaderReviewProps> = ({ id, rating, comment, firstName, lastName, date }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const handleExpand = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
            setIsExpanded(true);
        } else if (isExpanded) {
            setIsExpanded(false);
        }
    };

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
    );
};