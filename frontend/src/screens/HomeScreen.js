import React from 'react'
import Row from 'react-bootstrap/Row'
import products from '../product'
import Product from '../components/Product'
import Col from 'react-bootstrap/Col'

const HomeScreen = () => {
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