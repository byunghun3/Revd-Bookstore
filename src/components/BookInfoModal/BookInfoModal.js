import React from 'react';
import { Modal, Box } from '@mui/material';
import { styled } from '@mui/system';

// const BookModal = styled(Modal)({
//     width: "400px"
// })

const BookBox = styled(Box)({
    width: "40px"
})

export const BookInfoModal = (props) => {
    return (
        <div>hi
            {/* <BookModal > */}
            <Modal open={props.open}>
                <BookBox>
            Hi Hi
            </BookBox>
            </Modal > 
            {/* </BookModal >  */}

        </div>
    )
}

// export default BookInfoModal
