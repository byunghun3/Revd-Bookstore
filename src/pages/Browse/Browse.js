import React from 'react';
import { Grid, Card } from '@mui/material';
import Book from '../../components/Book/Book';

function Browse() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4} >
                    <Card>Book1</Card>    
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>Book2</Card>    
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>Book3</Card>    
                </Grid>  
                <Grid item xs={12} md={4}>
                    <Card>Book4</Card>    
                </Grid>  
            </Grid>          
        </div>
    )
}

export default Browse;
