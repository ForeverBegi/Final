
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import { useParams } from 'react-router-dom';

// funkciya 20
export default function EditProduct() { // dobavlyaem s add product 
    const [values, setValues] = React.useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: ''
    })

// funkciya 21
const{ edit, editProduct, saveEditedProduct} = React.useContext(productContext)

const {id} = useParams() // posle 21 funkcii

React.useEffect(() => {
    editProduct(id)
}, [id]) //prinimaet v argumenty massiv zavisimostei []

//funkciya 22

React.useEffect(() => {
    if(edit) {
        setValues(edit)
    }
}, [edit])

//funkciya 23
const handleEditInp = (e) =>{
    let obj = {
        ...values,
        [e.target.name]: e.target.value
    }
    setValues(obj)
}

//funkciya 24
const handleSave = () => {
    saveEditedProduct(values)
}


  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: '40px auto',
          width: 1000,
          height: 'auto',
          p: '10px'
        },
      }}
    >

      
      <Paper elevation={3}>
        <h1>Change the data</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
                <div>
                    <img width='300px' src={values.image} alt={values.title}/>
                </div>
                <div style={{
                    width: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                
                 </div>
                
                 <form noValidate autoComplete='off' style={{   
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='title' 
                        onChange={handleEditInp} 
                        value={values.title} 
                        variant='outlined' 
                        label='Title'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='image' 
                        onChange={handleEditInp} 
                        value={values.image} 
                        variant='outlined' 
                        label='Image'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='price' 
                        onChange={handleEditInp} 
                        value={values.price} 
                        variant='outlined' 
                        label='Price'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='type' 
                        onChange={handleEditInp} 
                        value={values.type} 
                        variant='outlined' 
                        label='Type'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='description' onChange={handleEditInp} //posle myroutes dobavlyaem handleINp
                        value={values.description} 
                        variant='outlined' 
                        label='Description'/>

                </form>
                <Link to='/'> 
                    <Button onClick={handleSave} variant='contained' color='warning'> Save </Button>
                </Link>


            </div>
      </Paper>
    </Box>
  );
}
