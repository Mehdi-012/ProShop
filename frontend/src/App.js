import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './Component/Header'
import Footer from './Component/Footer';
// import HomeScreen from './Screens/HomeScreen';


const App = () => {
  return (
    <>
      <Header /> 
      <main className='py-3 '>
        <Container>
          <Outlet />

      </Container>
    </main>
      <Footer />
    </>
    
  )
}

export default App
