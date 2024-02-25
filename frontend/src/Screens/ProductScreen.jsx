import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loader from '../Component/Loader'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Component/Rating'
import Message from '../Component/Message'

// import { useState, useEffect } from 'react'
// import axios from 'axios'

import { useGetProductsDetailsQuery } from '../slices/productsApiSlice'

const ProductScreen = () => {
  // const [product, setProduct] = useState({})

  // fetching ProductId by using redux toolkit
  const { id: productId } = useParams()

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductsDetailsQuery(productId)

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `http://localhost:8000/api/products/${productId}`
  //       )
  //       console.log(data)
  //       setProduct(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchProduct()
  // }, [productId])

  // Getiing the data from the frontend :
  // const product = products.find((p) => p._id === productId)
  // console.log(product)

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Message>Hello</Message>

      {isLoading ? (
        <Loader />
      ) : error ? (
        // to test the Message you can copy paste it with the message of Hello and then it will appear on red color
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3> {product.name} </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description : {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price :</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
