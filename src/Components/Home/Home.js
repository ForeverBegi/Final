import { Grid } from '@mui/material';
import React from 'react';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

//Funkciya 15 posle content js, sidebar podklyuchaem posle verstki i 51 funkcii v sidebar jsx
const Home = () => {
    return (
        <div>
            <Grid spacing-md={3} spacing-sm={3} >
                <Sidebar/>
                <Content/>
            </Grid>
            <Footer/>
        </div>
    );
};

export default Home;