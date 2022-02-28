import React, { FC } from "react"
import StarIcon from "@mui/icons-material/Star"
import StarHalfIcon from "@mui/icons-material/StarHalf"
import StarOutlineIcon from "@mui/icons-material/StarOutline"
import { styled } from "@mui/system"

interface AvgReaderRatingProps {
    rating: number
}

const CheckedStarIcon = styled(StarIcon)({
    color: "#FDCC0D",
    fontSize: "5rem"
})

const CheckedStarHalfIcon = styled(StarHalfIcon)({
    color: "#FDCC0D",
    fontSize: "5rem"
})

const UncheckedStarOutlineIcon = styled(StarOutlineIcon)({
    color: "#FDCC0D",
    fontSize: "5rem"
})

export const AvgReaderRating: FC<AvgReaderRatingProps> = ({ rating }) => {
    const renderStars = (rating: number) => {
        switch (true) {
            case (rating < 0.75):
                return <div><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 0.75 && rating < 1.25):
                return <div><CheckedStarIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 1.25 && rating < 1.75):
                return <div><CheckedStarIcon /><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 1.75 && rating < 2.25):
                return <div><CheckedStarIcon /><CheckedStarIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 2.25 && rating < 2.75):
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 2.75 && rating < 3.25):
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 3.25 && rating < 3.75):
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 3.75 && rating < 4.25):
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><UncheckedStarOutlineIcon /></div>
            case (rating >= 4.25 && rating < 4.75):
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarHalfIcon /></div>
            case (rating >= 4.75):
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /></div>
            default:
                return <div><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>
        };
    }

    return (
        <div>
            {renderStars(rating)}
        </div>
    )
}