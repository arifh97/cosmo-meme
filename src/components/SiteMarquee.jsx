import Marquee from "react-fast-marquee"
import logo from '../assets/img/marquee.svg'

export default function SiteMarquee() {
  const items = [
    logo,logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
  ]
  return (
    <div className="cwc-animation">
      <Marquee speed={80}>
        {items.map((item, index) => (
          <div className="cwc-item me-4 me-md-5" key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
