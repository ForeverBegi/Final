import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { productContext } from '../../../Contexts/ProductsContext';
import DeleteIcon from '@mui/icons-material/Delete'; //dobavili ikonku udaleniya
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import {ShoppingCart} from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




// funkciya 13
export default function ProductCard({item}) {

    const { deleteProduct, addToCart, checkProductInCart, addToStar, chekProductInStar } = React.useContext(productContext) // funkciya 17, addToCart dobavlyaem posle funkcii addTocart, i check posle 26 funkcii
    

//posle 17 funkcii
    let icons = (
        <CardActions disableSpacing> 
            <Link to={`edit/${item.id}`}> 
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </Link> 
            <IconButton onClick={() => deleteProduct(item.id)}> 
                <DeleteIcon/>
            </IconButton>
            <IconButton 
              onClick={() => {addToCart(item)}}
              color = {checkProductInCart(item.id) ? 'secondary' : 'inherit'}
              >  
              <ShoppingCart/> 
            </IconButton>
            <IconButton 
              onClick={() => {addToStar(item)}}
              color = {chekProductInStar(item.id) ? 'secondary' : 'inherit'}
              >  
              <FavoriteBorderIcon/> 
            </IconButton>

        </CardActions>
    )


  return (
    <Card sx={{ maxWidth: 420 }}>
      <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          alt={item.title}
        />
        {/* {currentUser?.email === "admin1@gmail.com" ? (  
                <Typography sx={{fontSize: '20px', textAlign: 'center'}}>
                  {item.type}
                </Typography>  
                ): null
              } */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          {/* {currentUser?.email === "admin1@gmail.com" ? ( 
              <Typography sx={{fontSize: '13px', paddingTop: '5px', textAlign: 'center'}}>
                {item.description}
              </Typography>
              ): null
            } */}
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Link>

      <CardContent>
          <Typography>
              ${item.price}
          </Typography>
          <Typography>
              classification: {item.type}
          </Typography>
      </CardContent>
      {icons}
     
    </Card>
  );
}
