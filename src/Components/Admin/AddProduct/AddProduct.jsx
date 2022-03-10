import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { productContext } from '../../../Contexts/ProductsContext';
import { useNavigate } from 'react-router';

 function AddProduct() {
    const [values, setValues] = useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: ''
    })

// funkciya 8 
    const { addProduct } = React.useContext(productContext)
    const navigate = useNavigate()

// funkciya 1
    const handleInp = (e) => {
        let obj= {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

// funkciya 2
    const handleSave = () => {
        if(!values.image) values.image = 'https://static.vecteezy.com/system/resources/previews/000/388/031/original/people-carrying-donation-and-charity-related-icons-vector.jpg'
        addProduct ({...values, price: + values.price}) // dobavlyaem posle 8 funkcii etu stroku
        navigate('/')
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
        },
      }}
    >
      <Paper elevation={3}>
        <h1 style={{textAlign: 'center'}}>Add Product</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <div>
                <img width='500' src={values.image ? values.image : 'https://static.vecteezy.com/system/resources/previews/000/388/031/original/people-carrying-donation-and-charity-related-icons-vector.jpg'} alt='' />
            </div>
            <div style={{
                width: '450px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <form noValidate autoComplete='off' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='title' 
                        onChange={handleInp} 
                        value={values.title} 
                        variant='outlined' 
                        label='Title'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='image' 
                        onChange={handleInp} 
                        value={values.image} 
                        variant='outlined' 
                        label='Image'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='price' 
                        onChange={handleInp} 
                        value={values.price} 
                        variant='outlined' 
                        label='Price'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='type' 
                        onChange={handleInp} 
                        value={values.type} 
                        variant='outlined' 
                        label='Type'/>
                    <TextField 
                        style={{padding:'10px'}} 
                        name='description' onChange={handleInp} //posle myroutes dobavlyaem handleINp
                        value={values.description} 
                        variant='outlined' 
                        label='Description'/>

                </form>
                <Button onClick={handleSave} variant='contained' color='warning'>Add</Button>
            </div>
        </div>
      </Paper>
    </Box>
  );
}

export default AddProduct