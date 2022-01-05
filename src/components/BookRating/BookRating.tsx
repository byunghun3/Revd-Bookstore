import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { styled } from '@mui/system';

const CheckedStarIcon = styled(StarIcon)({
    color: "#FDCC0D"
})

const CheckedStarHalfIcon = styled(StarHalfIcon)({
    color: "#FDCC0D"
})

const UncheckedStarOutlineIcon = styled(StarOutlineIcon)({
    color: "#FDCC0D"
})

type BookRatingProps = {
    rating: number
}

function BookRating(props: BookRatingProps) {
    const renderStars = (rating:number) => {
        switch (rating) {
            case 0.5:
                return <div><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
            case 1:
                return <div><CheckedStarIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
            case 1.5:
                return <div><CheckedStarIcon /><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
            case 2:
                return <div><CheckedStarIcon /><CheckedStarIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
            case 2.5:
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
            case 3:
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
            case 3.5:
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarHalfIcon /><UncheckedStarOutlineIcon /></div>;
            case 4:
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><UncheckedStarOutlineIcon /></div>;
            case 4.5:
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarHalfIcon /></div>;
            case 5:
                return <div><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /><CheckedStarIcon /></div>;  
            default:
                return <div><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /><UncheckedStarOutlineIcon /></div>;
        };
    }
    
    return (
        <div>
            {renderStars(props.rating)}
        </div>
    )
}

export default BookRating
