import { Container, Row, Col } from 'react-bootstrap'
import Launch from './Launch'

export default function Footer() {
  return (
    <div className='footer position-relative z-1'>
      <div className="footer-shape position-absolute bottom-0 start-0 z-n1">
        <svg width="993" height="821" viewBox="0 0 993 821" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_122_12)">
            <ellipse cx="108.249" cy="878.565" rx="264.537" ry="257.711" fill="#1CDCFF" />
          </g>
          <defs>
            <filter id="filter0_f_122_12" x="-776.288" y="0.853516" width="1769.08" height="1755.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="310" result="effect1_foregroundBlur_122_12" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="footer-shape position-absolute bottom-0 end-0 z-n1">
        <svg width="974" height="849" viewBox="0 0 974 849" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_122_11)">
            <ellipse cx="884.989" cy="878.565" rx="264.537" ry="257.711" fill="#1CDCFF" />
          </g>
          <defs>
            <filter id="filter0_f_122_11" x="0.451172" y="0.853516" width="1769.07" height="1755.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="310" result="effect1_foregroundBlur_122_11" />
            </filter>
          </defs>
        </svg>
      </div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} xl={4}>
            <Launch className="text-center" />
          </Col>
          <Col xs={12}>
            <h4 className="text-center mb-0 fw-normal">Copyright © 2024 $COSMO. All rights reserved</h4>
          </Col>
        </Row>
      </Container>
    </div >
  )
}
