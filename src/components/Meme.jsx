import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import img_1 from '../assets/img/meme/1.png'
import img_2 from '../assets/img/meme/2.png'
import img_3 from '../assets/img/meme/3.png'
import img_4 from '../assets/img/meme/4.png'
import img_5 from '../assets/img/meme/5.png'
import img_6 from '../assets/img/meme/6.png'

export default function Meme() {
  const meme = [
    {
      img: img_1,
    },
    {
      img: img_2,
    },
    {
      img: img_3,
    },
    {
      img: img_4,
    },
    {
      img: img_5,
    },
    {
      img: img_6,
    },
  ]
  return (
    <div className='meme common-padding'>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <CommonTitle title="The community meme" des="In the vast expanse of the cryptocurrency universe, there exists a unique celestial body known as $COSMO Meme Coin." />
          </Col>
          <Col xs={12}>
            <div className="meme-wrap">
              {meme.map((item, index) => (
                <div className="meme-item" key={index}>
                  <div className="meme-img"><img src={item.img} alt="" /></div>
                  <div className="meme-content"><strong className='fw-bold'>$COSMO</strong> Meme Coin</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
