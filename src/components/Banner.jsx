import {Container, Row, Col} from 'react-bootstrap'
import poster from '../assets/img/video-preview.png'
import Launch from './Launch';

export default function Banner() {
  return (
    <div className="banner">
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6}>
            <div className="banner-content text-center">
              <h1 className='fw-black'>$COSMO</h1>
              <p>Together with tomcatwifhat on Crypto Earning</p>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} md={8}>
            <div className="banner-video position-relative z-1">
              <video className='position-absolute top-0 start-0 object-fit-cover' src="https://www.w3schools.com/tags/movie.mp4" poster="{poster}"></video>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} md={6} xl={4}>
            <Launch className="text-center" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
