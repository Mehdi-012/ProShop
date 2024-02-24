// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../Component/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'

const HomeScreen = () => {
  const { data: products, isloading, error } = useGetProductsQuery()

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
      {isloading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div> {error?.data.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Product</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
