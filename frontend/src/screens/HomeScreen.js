import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Product from '../components/Product'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

const HomeScreen = () => {
const [products, setProducts] = useState([])

 useEffect(() => {
  const fetchProducts = async () => {
    const {data} = await axios.get('/api/products')
    setProducts(data)
  }
  fetchProducts();
 })

  return (
    <>
    <h1>Latest Products</h1>
    <Row>
    {products.map(p => (
        <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
        </Col>
    ))}
    </Row>
    </>
  )
}

export default HomeScreen