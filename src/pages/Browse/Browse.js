import { Container } from '@mui/material';
import React from 'react';
import Books from '../../components/Books/Books';

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
            <Books />
        </Container>
    )
}

export default Browse;
