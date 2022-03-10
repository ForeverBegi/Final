import { Box, Grid, Pagination, Stack } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';

//funkciya 11
const ProductList = () => {
    const { products, getProducts, paginatedPages } = useContext(productContext) //paginated peredaem s paginaciei
// funkciya 37 PAGINATION
    const search = new URLSearchParams(window.location.search) //peredaem posle dannyh paginacii v product context
    const [searchParams, setSearchParams] = useSearchParams()
    const [limit, setLimit] = useState(9) // dlya zapisi limitirovannogo kolichestva produkcii na stranice 
    const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get('_page') : 1) //tekushee znachenie stranicy, pokaji neskolko stranic, esli dostatochno parametrov, esli stranic net, pokaji odnu stranicu, 
    const navigate = useNavigate() //posle 39 funkcii


//funkciya 12
    useEffect(() => {
        getProducts()
    }, [])

// funkciya 38 PAGINATION
    useEffect(() => {
        setSearchParams({
            '_limit': limit, 
            '_page': page
        })
    }, [limit, page])
// funkciya 39 PAGINATION dlya pereklyucheniya stranic
    const handlePage = (e, pageVal) => {
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setSearchParams ({'_page': pageVal, '_limit': limit})
        getProducts()
        setPage(pageVal)
    }


    return (
        <Box sx={{flexGrow: 1, margin: 4}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 8, md: 12}}>
                {
                    products ? (         //posle 12 funkcii zapolnyaem zaranee sozdav productCard.jsx dlya importa
                        products.map((item, index) =>(
                            <Grid item xs={2} sm={4} md={4} key={index}>  
                                <ProductCard item={item} key={index}/>
                            </Grid>
                        ))
                    ) : (<h1>Loading...</h1>)
                }
            
            </Grid>
            <Stack spacing2={2}> 
                <Pagination
                    count={paginatedPages}
                    onChange={handlePage}
                    page={+page}
                />
            </Stack>
            
        </Box>
    );
}; 

export default ProductList;