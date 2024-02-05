import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>

      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>

      <Card.Text as="h3">$ {product.price}</Card.Text>
    </Card>
  )
}

export default Product
