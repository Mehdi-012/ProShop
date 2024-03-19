// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../Component/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from '../Component/Loader'
import Message from '../Component/Message'

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('http://localhost:8000/api/products')
  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Product</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

// Cli : command line interface
// Os : operation system

export default HomeScreen
