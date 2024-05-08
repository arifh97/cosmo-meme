import { Container, Row, Col } from 'react-bootstrap'
import Launch from './Launch'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} xl={4}>
            <Launch className="text-center" />
          </Col>
          <Col xs={12}>
            <h4 className="text-center mb-0">Copyright © 2024 $COSMO. All rights reserved</h4>
          </Col>
        </Row>
    </Container>
    </div >
  )
}
