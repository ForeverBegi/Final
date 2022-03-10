import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { auth } from '../Firebase';
import { calcTotalPrice, calcSubPrice } from '../Helpers/CalcPrice';
import { API } from '../Helpers/Constants'

// funkciya 3
export const productContext = createContext()
const INIT_STATE = {
    products: null,
    edit: null, // dobavlyaem posle 18 funkcii
    cart: {},  // posle cart jsx
    cartLenght: 0,
    paginatedPages: 1, // posle pagination v productlist
    detail: {},  //posle funkcii  v productsDetail.jsx
    star: {},
    starLength: 0,
}

// funkciya 4
const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "GET_PRODUCTS": // dobavlyaem case psole funkcii 10
            return {...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"]/3) //matematicheskii schet dlya konkretnogo chisla v korzine v paginated Page, kotoroe my delim na tri dlya otobrajeniya na stranice
            }
        case "GET_EDIT_PRODUCT": //sozdaem posle 18 funkcii
            return {...state, edit: action.payload}
        case "CHANGE_CART_COUNT":
            return {...state, cartLenght: action.payload} // posle 35 funkcii
        case "GET_CART":
            return {...state, cart: action.payload} // posle change cart count vyshe
        case "GET_DETAIL_PRODUCT": // posle 44 funkcii
            return {...state, detail: action.payload}
        case "CHANGE_STAR_COUNT":
            return{...state, starLength: action.payload}
        case "GET_STAR":
            return{...state, star: action.payload}
        default:
            return state

    }
}
const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE) // funkciya 5 
    //! CREATE function 
    // funkciya 6 
    const addProduct = async (newProduct) => {
        try {
            await axios.post(API, newProduct) //importirovat' api obyazatelno!
            getProducts()
        }catch (error) {
            alert (error)
        }
    }

    //! READ styagivanie dannyh
    // funkciya 10

    const getProducts = async () => {
        try {
            let res = await axios.get(`${API}${window.location.search}`) //window location serach dobavlyaem dlya paginacii
            let action = {
                type: "GET_PRODUCTS",
                payload: res
            }
            dispatch(action)
        } catch (error) {
            alert(error)
        }
    }

    //! DELETE
    //funkciya 16
    const deleteProduct = async (id) => {
        await axios.delete(`${API}/${id}`)
        getProducts()
    }

    //! UPDATE PRODUCT
    // funkciy 18
    const editProduct = async (id) => {
        try {
            let res = await axios (`${API}/${id}`)
            let action = {
                type: "GET_EDIT_PRODUCT",
                payload: res.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }

    //! SAVE EDITED PRODUCT
    // funkciya 19
    const saveEditedProduct = async (updatedProduct)=> {
        console.log(updatedProduct, 'updated')
        try {
            await axios.patch(`${API}/${updatedProduct.id}`, updatedProduct)
            getProducts() //vyzyvaem posle product card
        } catch (error) {
            console.log(error);
        }
    }

    //! ADD TO CART
    //Funkciya 25 dobavlyaet tovary v korzinu (local storage)
    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart= {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0  //dlya summy produkta
        }

        // funkciya 27 dlya fil'tracii
        let filteredCart = checkProductInCart(product.id)
        if (filteredCart === true){
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }
        else{
            cart.products.push(newProduct)

        }
        // funkciya 31
        newProduct.subPrice = calcSubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)

        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart);
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length  //posle 31 funkcii
        })

    }
    //! GET CART dlya styagivaniya dannyh iz local storage i otobrajeniya
    //funkciya 33 schitaet kolichestvo pruktov v korzine
    const getCartLenght = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));  //skopirovali iz funkcii addTocart
        if(!cart){
            cart= {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length  //iz funkcii AddToCart
        })
    }
    //funkciya 34
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));  //skopirovali iz funkcii addTocart
        if(!cart){
            cart= {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }
    
    //funkciya 35
    const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        }) 
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart)) //kladem izmenennye dannye v localStorage
        getCart()
    }


    //!Check PRODUCT IN CART
    //funkciya 26
    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0 //dobavlyaem  posle 31 funkcii
            }
        }
        

        let newCart = cart.products.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false // uslovie dlya cartochki v korzine
    }

    function deleteCartProduct(id){
        let toDelete = JSON.parse(localStorage.getItem("cart"));
        toDelete.products = toDelete.products.filter(
          (elem) => elem.item.id !== id
        );
        localStorage.setItem("cart", JSON.stringify(toDelete))
        getCart()
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: toDelete.products.length
        })
      }

// ! FAVORITES
const addToStar = (product) => {
    let star = JSON.parse(localStorage.getItem('star'));
    if(!star) {
        star = {
            products: [],
        }
    }
    let newProduct = {
        item: product,
        count: 1,
    }
    let filteredStar = chekProductInStar(product.id)
    if(filteredStar === true) {
        star.products = star.products.filter(elem => elem.item.id !== product.id )
    }
    else{
        star.products.push(newProduct)
    }
    // newProduct.subPrice = calcSubPrice(newProduct)
    // cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem('star', JSON.stringify(star))
    dispatch({
        type: 'CHANGE_STAR_COUNT',
        payload: star.products.length
    })
}
  const getStarLength = () => {
    let star = JSON.parse(localStorage.getItem('star'));
    if(!star) {
        star = {
            products: [],
            
            
        }
    }
    dispatch({
        type: 'CHANGE_STAR_COUNT',
        payload: star.products.length 
    })
}

// !для стягивания и отображения данных с корзины
    const getStar = () => {
        let star = JSON.parse(localStorage.getItem('star'));
    if(!star) {
        star = {
            products: [],
            
        }
    }
    dispatch({
        type: 'GET_STAR',
        payload: star
    })
    }
    const chekProductInStar = (id) => {
        let star = JSON.parse(localStorage.getItem('star'))
        if(!star) {
            star= {
                products: [],
            }
        }
        let newStar = star.products.filter(elem => elem.item.id === id)
        // console.log(newCart);
        return newStar.length > 0 ? true : false
    }
           // ! DELETEPRODUCTINstar
           const deleteProductInStar = (id) => {
            let toDelete = JSON.parse(localStorage.getItem('star'));
            toDelete.products =toDelete.products.filter(
                (elem) => elem.item.id !== id
            );
            localStorage.setItem('star', JSON.stringify(toDelete))
            getStar()
            dispatch({
                type: "CHANGE_STAR_COUNT",
                payload: toDelete.products.length
            })
        }
  

    //! GET DETAIL
    //funkciya 43
    const getDetail = async (id) => {
        const res = await axios(`${API}/${id}`)
        let action ={
            type: "GET_DETAIL_PRODUCT",
            payload: res.data
        }
        dispatch(action)
    }

    function deleteCartPayment(){
        localStorage.clear()
        let action = {
            type: "CHANGE_CART_COUNT",
            payload: 0
        }
        dispatch(action)
        
    }

    //! SIGN UP / SIGN IN
    //funkciya 53
    function signUp (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //funkciya 54 SIGN IN
    function signIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //funkciya 59 dlya togo chtoby zalogonit'sya
    function logout() {
        return signOut(auth)
    }

    //funkciya 60 dlya proverki tekushego pol'zovatelya i sohraneniya ego posle registracii i otobrajeniya v navbare
    function useAuth() {
        const [currentUser, setCurrentUser] = useState()

        useEffect(() => {
            const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
            return unsub
        }, [])

        return currentUser
    }


    return ( //zapolnyaem posle funkcii 6
        <productContext.Provider value={{
            addProduct,
            getProducts, //peredaem posle case v reducer
            deleteProduct, //posle funkcii 16
            editProduct,
            saveEditedProduct, // dobavlyaem posle 19 funkcii vse edit
            addToCart,  //posle 25 funkcii dobavlyaem syuda
            checkProductInCart, // posle 26 funkcii peredaem syuda
            getCartLenght, //posle reducera i case cartCount peredaem tri cart funkcii syuda
            getCart,
            changeProductCount,
            getDetail, //peredaem posle 43 funkcii
            signUp, //posle 54 funkcii peredaem vse syuda
            signIn,
            deleteCartProduct,
            deleteCartPayment,
            logout, //posle 60 funkcii peredaem
            useAuth,
            addToStar,
            getStarLength,
            getStar,
            chekProductInStar,
            deleteProductInStar,
    
            edit: state.edit,
            products: state.products,
            cartLenght: state.cartLenght,
            cart: state.cart,  // dobavlyaem posle cart.jsx
            paginatedPages: state.paginatedPages, //peredaem dlya pagination
            detail: state.detail, // posle 43 funkcii
            starLength: state.starLength,
            star: state.star,
        }}>
            {children}
            
        </productContext.Provider>
    );
};

export default ProductsContextProvider;