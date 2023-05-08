import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux' //useSelector allows you to select the data
import {Row, Col}from 'react-bootstrap/'
import Product from '../components/Product'


import { listProducts } from '../actions/productActions' //This is the productAction.js and it calls axio to get data from api. 
import Message from '../components/Message'
import Loader from '../components/Loader'

const HomeScreen = () => { 

const dispatch = useDispatch()
//We pass store in  index.js so that is why state is looking at the store 
const productList = useSelector((state) => state.productList) //state is entire data in store.js.
const {loading, error, products} = productList

useEffect(() => {
  dispatch(listProducts())
}, [dispatch] )

  return (
    <>
    <h1>Latest Products</h1>
    {loading ? (<Loader />) 
                : error? (
                <Message variant='danger'>{error}</Message>
                ) 
                : (    <Row>
                  {products.map(p => (
                      <Col key={p._id} sm={12} md={6} lg={4} xl={3} >
                          <Product product={p} />
                      </Col>
                  ))}
                  </Row>)

    }

    </>
  )
}

export default HomeScreen