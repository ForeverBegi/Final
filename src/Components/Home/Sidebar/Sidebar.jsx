import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Slider } from '@mui/material';


//funkciya 47 (iz mui)
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

//! Fil'traciya
const Sidebar = () => {
//funkciya 48
const search = new URLSearchParams(window.location.search) // v konstantu search sohranyaem novyi rezul'tat url
const navigate = useNavigate()
const { getProducts } = useContext(productContext)
const [type, setType] = useState(search.get('type') || '')
const [price, setPrice] = useState(search.get('price_lte') || 0)
// const [searchParams, setSearchParams] = useSearchParams()

//funkciya 49
const filterProducts = (key, value) => {
    search.set(key, value)
    let newPath = `${window.location.pathname}?${search.toString()}` //peredaem eto v kachestve adresnoi stroki uje otfiltrovannoi stranicy
    navigate(newPath)
    setType(search.get('type') || '')
    setPrice(search.get('price_lte' || '')) //zdes logicheskii operator vnutri skobok
    getProducts()
}
//funkciya 50
const handleChangeType = (e, value) => { //prinimaet v sebya sobytie i znachenie
    search.set(e, value)
    let newPath = `${window.location.pathname}?${search.toString()}`
    navigate(newPath)
    setType(search.get('type') || '')
    getProducts()
}

//funkciya 51 dlya sbrasyvaniya rezultatov filtracii
const resetFilter = () => {
    navigate('/')
    setType ('')
    setPrice(0) 
    // setSearchParams({
    //     '_limit': 6,
    //     "_page": 1
    // })

    getProducts()
}

//Verstka posle 51 funkcii



    return (
        <Box sx={{ flexGrow: 1, display: 'flex', paddingTop: '10px'}}>
            <Grid container spacing={1} sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px', boxShadow: 'none', margin: '0 10px'}}>
                <Grid>
                    <Paper sx={{boxShadow: 'none', display: 'flex', flexDirection: 'column'}}>
                        <FormControl component='fieldset'>
                            <RadioGroup    
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                aria-label='gender'  
                                value={type} 
                                onChange={(e) => handleChangeType("type", e.target.value)}
                            >
                                <FormControlLabel 
                                    value='kyrgyz'
                                    control={<Radio/>}
                                    label="Kyrgyz Art"
                                />
                                <FormControlLabel
                                    value='modern'
                                    control={<Radio/>}
                                    label="Modern Art"
                                />
                                <FormControlLabel
                                    value='graphics'
                                    control={<Radio/>}
                                    label="Graphics"
                                />
                            </RadioGroup>
                        </FormControl>
                        
                        <Grid sx={{display: 'flex', justifyContent: 'center'}}> 
                            <Slider sx={{color: 'black'}}
                                onChange={(e) => filterProducts('price_lte', e.target.value)} valueLabelDisplay='auto' max={1000000}
                                value={price}
                                step={500}
                            />
                        </Grid>
                        <Button sx={{background: 'black'}} onClick={resetFilter}
                            variant='contained'>
                            Reset
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            
        </Box>
    );
};

export default Sidebar;