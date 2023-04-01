import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
        <Navbar.Brand href='/'>MyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className='ms-auto'>
      <Nav.Link href="/cart"><i class="fa-solid fa-cart-plus"></i>Cart</Nav.Link>
      <Nav.Link href='/login'><i class='fas fa-user'></i>Sign In</Nav.Link>
    </Nav>


        </Navbar.Collapse>

        </Container>


      </Navbar>

    </header>
  )
}

export default header