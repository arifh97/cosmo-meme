export default function CommonTitle({title, des, className='text-center'}) {
    return (
      <div className={`common-title ${className}`}>
          <h2 className="mb-0 text-uppercase fw-bolder">{title}</h2>
          {des ? <p className="mt-3 mt-md-4">{des}</p>: ''}
      </div>
    )
  }