import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Component/Header'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import { FooterComponent } from './Component/Footer';

const App = () => {
  return (
    <>
    <Header /> 
    <main className='py-3'>
      <Container> 
        <h1> Welcome to Proshop</h1>
      </Container>
    </main>
    <FooterComponent />
    </>
    
  )
}

export default App
