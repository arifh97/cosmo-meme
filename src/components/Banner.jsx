import {Container, Row, Col} from 'react-bootstrap'
import poster from '../assets/img/video-preview.png'
import Launch from './Launch';
import img from '../assets/img/banner.png'
import { useEffect } from 'react';
import Aos from 'aos';

export default function Banner() {
  useEffect(() => {
    Aos.init({
      duration:1200,
    })
  },[])
  return (
    <div className="banner position-relative z-1 overflow-hidden">
      <div className="banner-img position-absolute top-0 start-0 z-n1 w-100 h-100">
        <img src={img} alt="" className='w-100 h-100 object-fit-cover' />
      </div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} xxl={7}>
            <div className="banner-content text-center">
              <h1 className='mb-3 mb-md-4' data-aos="fade-up" data-aos-duration="" data-aos-delay="" data-aos-offset="">$COSMO</h1>
              <p data-aos="fade-up" data-aos-duration="1300" data-aos-delay="" data-aos-offset="">Together with tomcatwifhat on Crypto Earning</p>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10} data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="">
            <div className="banner-video position-relative z-1 overflow-hidden rounded-4 border border-4 border-primary">
              <video className='position-absolute top-0 start-0 object-fit-cover' src="https://www.w3schools.com/tags/movie.mp4" controls poster={poster}></video>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} xl={4}>
            <Launch className="text-center" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
