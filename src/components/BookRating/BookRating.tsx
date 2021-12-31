import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

type BookRatingProps = {
    rating: number
}

function BookRating(props: BookRatingProps) {
    const renderStars = rating => {
        switch (rating) {
            case 0.5:
                return <div><StarHalfIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
            case 1:
                return <div><StarIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
            case 1.5:
                return <div><StarIcon /><StarHalfIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
            case 2:
                return <div><StarIcon /><StarIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
            case 2.5:
                return <div><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
            case 3:
                return <div><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
            case 3.5:
                return <div><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon /></div>;
            case 4:
                return <div><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarOutlineIcon /></div>;
            case 4.5:
                return <div><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></div>;
            case 5:
                return <div><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>;  
            default:
                return <div><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /><StarOutlineIcon /></div>;
        };
    }
    
    return (
        <div>
            {renderStars(props.rating)}
        </div>
    )
}

export default BookRating
