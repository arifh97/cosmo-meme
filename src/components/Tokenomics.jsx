import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import logo from '../assets/img/logo.png';

export default function Tokenomics() {
  return (
    <div className='tokenomics common-padding position-relative z-1'>
      <div className="common-shape mt-4 mt-lg-5 position-absolute top-0 start-0"></div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} lg={6}>
            <CommonTitle title="Tokenomics" />
          </Col>
          <Col xs={12}>
            <div className="tokenomics-wrap d-flex flex-wrap justify-content-between">
              <div className="tokenomics-item bg-color text-center">
                <div className="icon mb-3"><img src={logo} alt="" /></div>
                <h3 className='mb-0'>Cosmos</h3>
              </div>
              <div className="tokenomics-item text-center">
                <p className="fw-bold text-white mb-12">Name: COSMO</p>
                <p className="fw-bold text-white">Ticker : $COSMO</p>
              </div>
              <div className="tokenomics-item text-center">
                <p className="fw-bold text-white mb-12">Tax : 0%</p>
                <p className="fw-bold text-white">supply : 1 Trillion</p>
              </div>
              <div className="tokenomics-item text-center">
                <p className="fw-bold text-white mb-12">LP : Burned</p>
                <p className="fw-bold text-white">CONTRACT: RENOUNCED</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
