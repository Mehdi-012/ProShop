import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Component/Header'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import Footer from './Component/Footer';
import HomeScreen from './Screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header /> 
      <main className='py-3 '>
        <Container>
          <HomeScreen />
      </Container>
    </main>
      <Footer />
    </>
    
  )
}

export default App
