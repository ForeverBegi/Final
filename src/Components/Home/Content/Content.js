import { Grid } from '@mui/material';
import React from 'react';
import ProductList from '../../Product/ProductList/ProductList';

// Funkciya 14
const Content = () => {
    return (
        <div>
            <Grid>
                <ProductList/>
            </Grid>
        </div>
    );
};

export default Content;