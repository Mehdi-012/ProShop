import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Component/Header'
import './src/assets/styles/bootstrap.min.css';
import './src/assets/styles/index.css';

const App = () => {
  return (
    <>
    <Header /> 
    <main className='py-3'>
      <Container> 
        <h1> Welcome to Proshop</h1>
      </Container>
    </main>
    <Footer />
    </>
    
  )
}

export default App
