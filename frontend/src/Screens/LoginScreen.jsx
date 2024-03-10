import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Col, Row } from 'react-bootstrap'
import FormContainer from '../Component/FormContainer'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <FormContainer>
      <h1>Sign in </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer ? <Link to={'/registre'}>Registre </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
