import { Container, Row, Col } from 'react-bootstrap';


 const FooterComponent = () => {
   const currentYear = new Date().getFullYear()
   return (
     <footer>
       <Container>
         <Row>
           <Col className="text-center py-3">
             <p>Proshop &copy; {currentYear} ProShop</p>
           </Col>
         </Row>
       </Container>
     </footer>
   )
 }
export default FooterComponent

