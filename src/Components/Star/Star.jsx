import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { productContext } from '../../Contexts/ProductsContext';
export default function Star({item}) {
    const {star,getStar,  deleteProductInStar, addToCart} = React.useContext(productContext)
    React.useEffect(() => {
      getStar()
    }, [])
    let icons = (
      <CardActions disableSpacing>
              <IconButton style={{color: '#29d9d5'}} onClick={() => {
                addToCart(item) 
                }        
            }
             >
                 <ShoppingCartCheckoutIcon />
            </IconButton> 
          
      </CardActions>
    )
 
  return (
    <div>
      <h1 style={{display: 'flex', textAlign: 'center', justifyContent: 'center'}}>favorites</h1>
       <Box
      sx={{
      flexGrow: 1, margin: 4
      }}
      >
        <Paper elevation={6} > 
        <Grid container spacing={3} justifyContent='center'> 
                 {star.products ? (
        <>
          {star.products.map((elem) => (
            <Grid key={elem.item.id} item xs={12} sm={6} md={3}>
          <Card sx={{width: '100%'  }}  >
            <CardMedia 
            src={elem.item.image}
              component="img"
              width='100%'
              height="300"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" >
              {elem.item.title}
              </Typography>
            </CardContent>
          
            
            <CardContent>
                <Typography variant='body1'>
                    Cтоимость:{elem.item.price}
                </Typography>
                <Typography variant='body2'>
                    Класс: {elem.item.model}
                </Typography>
                <Typography variant='body2'>
                    Тип: {elem.item.type}
                </Typography>
                <Typography variant='body2'>
                    Тип: {elem.item.description}
                </Typography>
                <IconButton onClick={() => deleteProductInStar(elem.item.id)} >
                  <ClearIcon/>
                  {icons}
                </IconButton>
                
            </CardContent>
            
            </Card>
            </Grid>
            ))}
          </>
        ) : (null)}
        </Grid>
        
        </Paper>
      </Box>
    </div>
    
   
  );
}