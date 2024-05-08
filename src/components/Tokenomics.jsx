import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import logo from '../assets/img/logo.png';

export default function Tokenomics() {
  return (
    <div className='tokenomics common-padding'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} lg={6}>
            <CommonTitle title="Tokenomics" />
          </Col>
          <Col xs={12}>
            <div className="tokenomics-wrap d-flex align-items-center justify-content-between">
              <div className="tokenomics-item bg-color text-center">
                <div className="icon mb-3"><img src={logo} alt="" /></div>
                <h3>Cosmos</h3>
              </div>
              <div className="tokenomics-item text-center">
                <p className="fw-bold text-white">Name: COSMO</p>
                <p className="fw-bold text-white">Ticker : $COSMO</p>
              </div>
              <div className="tokenomics-item text-center">
                <p className="fw-bold text-white">Tax : 0%</p>
                <p className="fw-bold text-white">supply : 1 Trillion</p>
              </div>
              <div className="tokenomics-item text-center">
                <p className="fw-bold text-white">LP : Burned</p>
                <p className="fw-bold text-white">CONTRACT: RENOUNCED</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
