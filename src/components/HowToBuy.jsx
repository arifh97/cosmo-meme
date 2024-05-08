import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'

export default function HowToBuy() {
  const buy = [
    {
      icon: `<svg width="35" height="49" viewBox="0 0 35 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.8187 20.7005H17.8715V13.3833C18.0239 13.3833 18.1764 13.4341 18.3288 13.4341C19.7008 14.552 20.7171 17.3976 20.8187 20.7005ZM20.8187 21.5136H17.8715V28.8308C18.0239 28.8308 18.1764 28.78 18.3288 28.78C19.7008 27.6621 20.7171 24.8165 20.8187 21.5136ZM24.833 20.7005C24.6806 17.5501 22.5972 14.8569 19.7516 13.7898C20.8187 15.3142 21.5301 17.8041 21.6317 20.7005H24.833ZM19.7516 28.3735C22.5972 27.3064 24.6806 24.664 24.833 21.4628H21.6317C21.5809 24.3592 20.8695 26.8491 19.7516 28.3735ZM33.9287 46.3109C33.6239 47.1239 33.0649 47.8353 32.3027 48.2926C31.947 48.5467 31.4389 48.8516 30.6258 48.8516C30.3209 48.8516 1.45853 48.8007 1.45853 48.8007H1.40772C1.00121 48.8007 0.645508 48.3942 0.645508 47.9877V0.527344H29.8636C32.1503 0.527344 33.9796 2.35665 33.9796 4.64329V40.1623C33.9796 42.449 32.1503 44.2783 29.8636 44.2783H2.0683V46.819C2.0683 46.819 29.8128 46.8698 30.6258 46.8698C31.4389 46.8698 32.506 46.1076 32.9125 45.6503C33.3698 45.1929 33.7255 44.5832 33.9796 43.8718C34.2336 44.634 34.2336 45.4978 33.9287 46.3109ZM7.65785 21.1071C7.65785 26.2901 11.8754 30.5077 17.0585 30.5077C22.2415 30.5077 26.4591 26.2901 26.4591 21.1071C26.4591 15.924 22.2415 11.7064 17.0585 11.7064C11.8754 11.7064 7.65785 15.924 7.65785 21.1071ZM14.3653 28.3735C13.2982 26.8491 12.5868 24.3592 12.4852 21.4628H9.28391C9.43635 24.664 11.5197 27.3572 14.3653 28.3735ZM14.3653 13.7898C11.5197 14.8569 9.43635 17.4993 9.28391 20.7005H12.4852C12.536 17.855 13.2474 15.3651 14.3653 13.7898ZM16.2454 20.7005V13.3833C16.093 13.3833 15.9406 13.4341 15.7881 13.4341C14.4161 14.552 13.3998 17.3976 13.2982 20.7005H16.2454ZM15.7881 28.78C15.9406 28.8308 16.093 28.8308 16.2454 28.8308V21.5136H13.2982C13.3998 24.8165 14.4161 27.6621 15.7881 28.78Z" fill="white"/>
      </svg>`,
      title: `COSMO`,
      des: `Digital identity that proves you are a real and unique person while fully protecting your privacy.`,
    },
    {
      icon: `<svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.04857 28.0654H1.77007C1.16978 28.0654 0.644531 28.5907 0.644531 29.191V46.6744C0.644531 47.2747 1.16978 47.7999 1.77007 47.7999H9.04857C9.64886 47.7999 10.1741 47.2747 10.1741 46.6744V29.191C10.0991 28.5156 9.64886 28.0654 9.04857 28.0654Z" fill="#F1F1F1"/>
      <path d="M28.3323 26.0396C35.3857 26.0396 41.0884 20.3369 41.0884 13.2835C41.0884 6.23009 35.3857 0.527344 28.3323 0.527344C21.2789 0.527344 15.5762 6.23009 15.5762 13.2835C15.5762 20.3369 21.2789 26.0396 28.3323 26.0396ZM28.3323 4.65433C33.1346 4.65433 36.9615 8.55621 36.9615 13.2835C36.9615 18.0108 33.0596 21.9126 28.3323 21.9126C23.605 21.9126 19.7032 18.0108 19.7032 13.2835C19.7032 8.55621 23.53 4.65433 28.3323 4.65433Z" fill="#F1F1F1"/>
      <path d="M28.033 15.2343C27.3576 15.2343 26.8324 15.0092 26.3822 14.7841L26.082 15.9097C26.4572 16.1348 27.1325 16.2848 27.8079 16.3599V17.3353H28.7833V16.2848C29.9089 16.0597 30.5842 15.3094 30.5842 14.4089C30.5842 13.5085 30.134 12.9833 28.9334 12.533C28.108 12.2329 27.7328 12.0078 27.7328 11.7076C27.7328 11.4075 27.9579 11.1824 28.5582 11.1824C29.3086 11.1824 29.7588 11.4075 29.9839 11.5576L30.2841 10.432C29.9839 10.282 29.5337 10.1319 28.8584 10.1319V9.23145H27.8829V10.2069C26.8324 10.432 26.2321 11.1073 26.2321 12.0078C26.2321 12.9832 26.9825 13.4335 28.033 13.8086C28.7833 14.0338 29.0835 14.2589 29.0835 14.7091C29.0084 15.0092 28.6333 15.2343 28.033 15.2343Z" fill="#F1F1F1"/>
      <path d="M41.0131 28.7409C40.3378 28.0656 39.4374 27.6904 38.4619 27.6904C37.4864 27.6904 36.586 28.0656 35.9857 28.8159L31.2584 33.8434C31.1834 33.8434 31.1084 33.8434 31.1084 33.9184L23.8299 35.4941C23.6047 35.5692 23.3796 35.4191 23.3046 35.194C23.2296 34.9689 23.3796 34.8188 23.5297 34.7438L27.2065 33.6933C27.8818 33.4682 28.4071 33.093 28.8573 32.5677C29.2325 32.0425 29.5326 31.3672 29.5326 30.6918C29.6076 28.966 28.182 27.4653 26.4561 27.3902L21.2786 27.1651C19.7029 27.0901 18.2022 27.4653 16.8515 28.2907L12.1242 30.992C11.8991 31.1421 11.599 31.2921 11.2988 31.3672V45.9242L21.7288 46.2243C21.8039 46.2243 21.8039 46.2243 21.8789 46.2243C22.4792 46.2243 23.0795 46.0742 23.6798 45.8491L34.3349 41.5721C35.1603 41.2719 35.8356 40.7467 36.3609 40.0713L36.9612 39.321C38.2368 37.6702 40.1877 35.119 41.4633 33.3931C41.9136 32.7928 42.2137 32.0425 42.2137 31.2921C42.0636 30.3167 41.6884 29.4162 41.0131 28.7409Z" fill="#F1F1F1"/>
      </svg>`,
      title: `Installed`,
      des: `The first token (WLD) to be globally and freely distributed to people, for both utility and future governance, just for being a unique individual.`,
    },
    {
      icon: `<svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2601 24.3723C15.1544 24.3919 15.0619 24.4557 15.0061 24.5477C14.9501 24.6396 14.9359 24.7509 14.967 24.8539C16.6398 30.3956 21.4926 34.5636 27.3996 35.233C27.5363 35.2484 27.6708 35.1886 27.7505 35.0767C27.8305 34.9645 27.8432 34.8181 27.7842 34.6939C27.7518 34.6262 27.7196 34.5584 27.6875 34.4911C27.1294 33.319 26.5131 32.1948 26.0743 30.9704C25.6465 29.7772 25.4191 28.3113 24.5755 27.3187C24.3923 27.1032 24.1613 27.0103 23.9066 26.9631C23.8024 26.9438 23.6941 26.9325 23.5867 26.9149C23.4906 26.8991 23.3928 26.8824 23.3103 26.8188C23.1486 26.6937 23.0332 26.5264 22.9159 26.3621C22.7575 26.1402 22.5977 25.9208 22.3889 25.75C21.6047 25.1083 20.2986 24.6654 19.3069 24.5001C18.1013 24.2993 16.5141 24.1388 15.2601 24.3723ZM33.1207 34.5108C33.2181 34.6356 33.383 34.6865 33.5338 34.6385C39.3957 32.7759 43.6726 27.3414 43.8022 20.8976C43.8049 20.7642 43.7373 20.6395 43.6244 20.5688C42.2665 19.7202 40.8187 19.0305 39.18 19.3036C38.349 19.4421 37.2435 20.0355 36.6756 20.6552C36.3808 20.9765 36.1582 21.3626 35.9301 21.7441C35.7347 22.0709 35.5365 22.3949 35.257 22.6479C34.7345 23.1205 34.0039 23.2138 33.3206 23.2314C33.0022 23.2396 32.6724 23.2141 32.3798 23.2672C31.9936 23.337 31.659 23.5182 31.4366 23.963C30.8983 25.0398 30.9897 26.6759 30.9897 27.8296C30.9897 30.2775 31.6719 32.6567 33.1207 34.5108ZM28.906 6.14571C28.8577 5.97888 28.7021 5.86621 28.5285 5.87257C21.3169 6.13572 15.422 11.5913 14.4741 18.6065C14.4474 18.8048 14.5794 18.9896 14.7756 19.0285C16.5857 19.3878 18.339 19.5555 20.2038 19.5159C21.6195 19.4857 23.574 19.2671 24.6408 18.1624C24.8988 17.895 24.984 17.5939 24.9864 17.2771C24.9884 17.0343 24.9346 16.781 24.8968 16.5351C24.8381 16.1537 24.783 15.6357 24.8503 15.1631C24.9044 14.7823 25.0293 14.4227 25.3671 14.2611C26.2207 13.8528 27.6973 13.7654 28.6328 13.9324C28.8582 13.9725 29.0025 14.113 29.1577 14.239C29.3198 14.3707 29.4868 14.4976 29.6898 14.5844C30.1605 14.7861 30.613 14.6915 31.0074 14.43C31.5037 14.1007 31.898 13.4851 32.0741 13.0157C32.5154 11.8392 32.229 10.9193 31.6703 10.1002C31.1724 9.37054 30.4396 8.72867 29.8861 8.03681C29.4301 7.46654 29.1026 6.82539 28.906 6.14571Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0741 5.8623C20.9432 5.8623 14.3418 12.4637 14.3418 20.5946C14.3418 28.7256 20.9432 35.3268 29.0741 35.3268C37.2051 35.3268 43.8063 28.7256 43.8063 20.5946C43.8063 12.4637 37.2051 5.8623 29.0741 5.8623ZM29.0741 6.61958C36.7871 6.61958 43.0492 12.8815 43.0492 20.5946C43.0492 28.3076 36.7871 34.5697 29.0741 34.5697C21.361 34.5697 15.0991 28.3076 15.0991 20.5946C15.0991 12.8815 21.361 6.61958 29.0741 6.61958Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4757 34.061C24.4757 33.9025 24.3772 33.761 24.2286 33.7059C18.9006 31.7341 15.0986 26.6049 15.0986 20.5949C15.0986 14.5848 18.9006 9.45582 24.2286 7.48385C24.3772 7.42897 24.4757 7.28722 24.4757 7.12893V4.37824C24.4757 2.25289 22.7502 0.527344 20.6248 0.527344H4.49561C2.37025 0.527344 0.644531 2.25289 0.644531 4.37824V36.8115C0.644531 38.9371 2.37025 40.6626 4.49561 40.6626H20.6248C22.7502 40.6626 24.4757 38.9371 24.4757 36.8115V34.061ZM23.7186 34.322V36.8115C23.7186 38.5191 22.3322 39.9053 20.6248 39.9053H4.49561C2.78806 39.9053 1.40181 38.5191 1.40181 36.8115V4.37824C1.40181 2.67087 2.78806 1.28444 4.49561 1.28444H20.6248C22.3322 1.28444 23.7186 2.67087 23.7186 4.37824V6.86778C18.232 9.01203 14.3413 14.3528 14.3413 20.5949C14.3413 26.8372 18.2322 32.1779 23.7186 34.322Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7625 34.7434C17.3549 32.3256 13.583 26.8975 13.583 20.5952C13.583 14.2931 17.3549 8.86477 22.7625 6.44702V4.37855C22.7625 3.1982 21.8042 2.23975 20.6237 2.23975H17.901C17.7449 2.23975 17.6046 2.3357 17.5481 2.48127C17.3129 3.08752 16.785 3.52368 16.1607 3.52368H8.95724C8.33317 3.52368 7.80524 3.08752 7.57008 2.48127C7.51356 2.3357 7.37326 2.23975 7.21697 2.23975H4.49445C3.31392 2.23975 2.35547 3.1982 2.35547 4.37855V36.8118C2.35547 37.9924 3.31392 38.9508 4.49445 38.9508H20.6237C21.8042 38.9508 22.7625 37.9924 22.7625 36.8118V34.7434ZM7.80633 36.3826H17.3116C17.5206 36.3826 17.6903 36.213 17.6903 36.004C17.6903 35.795 17.5206 35.6255 17.3116 35.6255H7.80633C7.59752 35.6255 7.42778 35.795 7.42778 36.004C7.42778 36.213 7.59752 36.3826 7.80633 36.3826Z" fill="white"/>
      </svg>`,
      title: `Run it`,
      des: `Enables payment, purchases and transfers globally using the Worldcoin token, digital assets and traditional currencies.`,
    },
  ]
  return (
    <div className='whyTo common-padding'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} lg={10}>
            <CommonTitle title="HowToBuy" des="In the vast expanse of the cryptocurrency universe, there exists a unique celestial body known as COSMO Meme Coin." />
          </Col>
        </Row>
        <Row>
          {buy.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className="whyTo-card rounded-4">
                <div className="whyTo-num bg-primary text-white ms-auto d-flex align-items-center justify-content-center">{index < 9 ? 0 :""} {index+1}</div>
                <div className="whyTo-content">
                  <div className="whyTo-icon" dangerouslySetInnerHTML={{__html:item.icon}}></div>
                  <h4 className='mb-3 mb-md-4'>{item.title}</h4>
                  <p>{item.des}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
