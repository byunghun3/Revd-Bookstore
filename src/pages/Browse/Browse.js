import { Container } from '@mui/material';
import React from 'react';
import BookList from '../../components/BookList/BookList';

function Browse() {
    return (
        <Container>
            <select name="filter">
                <option value="type">Typaae</option>
                <option value="ebook">Ebook</option>
                <option value="audiobook">Audiobook</option>
            </select>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
            <BookList />
        </Container>
    )
}

export default Browse;
