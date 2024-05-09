import React from 'react'

export default function Social({ className = "justify-content-center" }) {
    const social = [
        {
            icon: `<svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1222 0.641093C31.5393 0.465578 31.9957 0.405044 32.444 0.465791C32.8924 0.526538 33.3163 0.706346 33.6715 0.9865C34.0268 1.26665 34.3005 1.63691 34.4641 2.05873C34.6277 2.48056 34.6753 2.93852 34.6019 3.38497L30.7746 26.5999C30.4034 28.8392 27.9464 30.1234 25.8927 29.008C24.1748 28.0748 21.6233 26.637 19.3283 25.1368C18.1808 24.3859 14.6657 21.9812 15.0977 20.2701C15.469 18.807 21.3752 13.3092 24.7502 10.0405C26.0749 8.75628 25.4708 8.01547 23.9065 9.19672C20.0219 12.1296 13.7849 16.5897 11.7227 17.8452C9.90362 18.9522 8.95525 19.1412 7.82125 18.9522C5.75237 18.6079 3.83369 18.0747 2.26769 17.425C0.151561 16.5475 0.254498 13.6382 2.266 12.7911L31.1222 0.641093Z" fill="black"/>
            </svg>`,
            name: 'telegram',
            url: '/'
        },
        {
            icon: `<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.1768 32.2358L20.5249 13.7951L20.5465 13.8124L31.954 0.595215H28.1419L18.849 11.353L11.4693 0.595215H1.47155L13.2833 17.8121L13.2819 17.8106L0.824219 32.2358H4.63632L14.9679 20.2671L23.179 32.2358H33.1768ZM9.95887 3.47162L27.7103 29.3594H24.6894L6.92362 3.47162H9.95887Z" fill="black"/>
            </svg>`,
            name: 'twitter',
            url: '/'
        },
    ]
    return (
        <div className={`social d-flex align-items-center gap-3 gap-lg-4 ${className}`}  data-aos="fade-up" data-aos-duration="1600" data-aos-delay="" data-aos-offset="">
            { social.map((item,index) => (
                <a href={item.url} className='social-link d-flex align-items-center justify-content-center' key={index} dangerouslySetInnerHTML={{__html:item.icon}}></a>
            )) }
        </div>
    )
}
