import { Container, Row, Col } from 'react-bootstrap'
import profile from '../assets/img/profile.png'
import { BsTwitterX } from 'react-icons/bs'
import { FaArrowRight } from "react-icons/fa6";
import CommonTitle from './CommonTitle'

export default function Team() {
  const team = [
    {
      img: profile,
      title: 'Rose alve',
      info: 'CMO',
      social: [
        {
          icon: <BsTwitterX />,
          name: 'x',
          url: '/'
        }
      ],
      profile_url: '/',
    },
    {
      img: profile,
      title: 'Andro saimon',
      info: 'DEV',
      social: [
        {
          icon: <BsTwitterX />,
          name: 'x',
          url: '/'
        }
      ],
      profile_url: '/',
    },
    {
      img: profile,
      title: 'Mila arian',
      info: 'ADVISOR',
      social: [
        {
          icon: <BsTwitterX />,
          name: 'x',
          url: '/'
        }
      ],
      profile_url: '/',
    },
    {
      img: profile,
      title: 'Silva ray',
      info: 'Marketing',
      social: [
        {
          icon: <BsTwitterX />,
          name: 'x',
          url: '/'
        }
      ],
      profile_url: '/',
    },
  ]
  return (
    <div className='team common-padding position-relative z-2'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className='text-start' title="Meet THe Team" />
          </Col>
        </Row>
        <Row className='common-row'>
          {team.map((item, index) => (
            <Col xs={12} md={6} lg={4} xl={3} className='d-flex mb-4 mb-xl-0' key={index} data-aos="fade-up" data-aos-duration={`1${index+2}00`} data-aos-delay={`${index+1}00`} data-aos-offset="">
              <div className="team-item w-100">
                <div className="team-img text-center">
                  <img src={item.img} alt="" />
                </div>
                <div className="team-content p-3">
                  <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                      <h4 className='mb-0'>{item.title}</h4>
                      <span>{item.info}</span>
                  </div>
                  <div className="mt-3 mt-lg-4 d-flex align-items-center flex-wrap justify-content-between">
                    {item.social.map((link, index) => (
                      <a href={link.url} key={index} target="_blank" className="social-link d-flex align-items-center justify-content-center text-black">{link.icon}</a>
                    ))}
                    <div className="team-foot d-flex align-items-center flex-wrap gap-1">
                      <span>US</span>
                      <a href={item.profile_url} target='_blank' className="link ms-2 d-flex align-items-center justify-content-center"><FaArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
