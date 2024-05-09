import Aos from 'aos'
import { useEffect } from 'react'

export default function CommonTitle({title, des, className='text-center'}) {
    useEffect(()=>{
      Aos.init({duration:1200})
    },[])
    return (
      <div className={`common-title ${className}`}>
          <h2 className="mb-0 text-uppercase fw-bolder" data-aos="fade-up" data-aos-duration="" data-aos-delay="" data-aos-offset="">{title}</h2>
          {des ? <p className="mt-3 mt-md-4" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="">{des}</p>: ''}
      </div>
    )
  }