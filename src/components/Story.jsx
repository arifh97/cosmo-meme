import { Container, Row, Col } from 'react-bootstrap'
import Launch from './Launch'
import CommonTitle from './CommonTitle'
import img_1 from '../assets/img/about/1.png'
import img_2 from '../assets/img/about/2.png'
import img_3 from '../assets/img/about/3.png'

export default function Story() {
  const story = [
    {
      img: img_1,
      title: 'The Birth of Cosmic Creativity',
      des: `Once upon a time in the vast cosmos of cryptocurrencies, there emerged a new star named COSMO. Unlike the traditional coins that merely shimmered with value, COSMO was a meme coin, brimming with cosmic humor and intergalactic charm. Its journey began as a playful idea among a group of crypto enthusiasts who sought to blend the excitement of meme culture with the limitless possibilities of blockchain technology.`,
    },
    {
      img: img_2,
      title: 'The Birth of Cosmic Creativity',
      des: `Once upon a time in the vast cosmos of cryptocurrencies, there emerged a new star named COSMO. Unlike the traditional coins that merely shimmered with value, COSMO was a meme coin, brimming with cosmic humor and intergalactic charm. Its journey began as a playful idea among a group of crypto enthusiasts who sought to blend the excitement of meme culture with the limitless possibilities of blockchain technology.`,
    },
    {
      img: img_3,
      title: 'The Birth of Cosmic Creativity',
      des: `Once upon a time in the vast cosmos of cryptocurrencies, there emerged a new star named COSMO. Unlike the traditional coins that merely shimmered with value, COSMO was a meme coin, brimming with cosmic humor and intergalactic charm. Its journey began as a playful idea among a group of crypto enthusiasts who sought to blend the excitement of meme culture with the limitless possibilities of blockchain technology.`,
    },
  ]
  return (
    <div className='story common-padding position-relative z-0'>
      <div className="common-shape position-absolute top-0 end-0 z-n1"></div>
      <div className="common-shape position-absolute two start-0 z-n1"></div>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6} xl={4}>
            <Launch className="text-center" />
          </Col>
        </Row>
        <Row className='justify-content-center common-padding'>
          <Col xs={12} lg={10}>
            <CommonTitle title="our story" des="In the vast expanse of the cryptocurrency universe, there exists a unique celestial body known as COSMO Meme Coin." />
          </Col>
          <Col xs={12}>
            {story.map((item, index) => (
              <Row key={index} className={`align-items-center mt-4 pt-md-2 ${index % 2 === 1 ? "flex-row-reverse" : ''}`}>
                <Col xs={12} md={5} lg={4}>
                  <div className="story-img mb-4 mb-md-0">
                    <img src={item.img} alt="" />
                  </div>
                </Col>
                <Col xs={12} md={7} lg={8}>
                  <div className={`story-content ${index % 2 === 1 ? "pr" :'pl'}`}>
                    <h4 className='mb-2 mb-md-3'>{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={6} xl={4}>
            <Launch className="text-center" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
