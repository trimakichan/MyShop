import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cardReducers';



const rootReducer =  combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
}) 

const cartItemFromStorage = localStorage.getItem
('cartItems')? JSON.parse(localStorage.getItem('cartItems'))
: []

const initialState = {
    cart: {cartItems: cartItemFromStorage}
}

const store = configureStore({
    reducer: rootReducer,
    preloadState: initialState
})

export default store