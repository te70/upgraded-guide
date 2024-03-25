import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src='./elvich_logo.png' alt='' width={120} />

                <span className='secondaryText'>
                    Your Vision, Our Expertise
                </span>
            </div>
            <div className="f-right flexColStart">
                <span className='primaryText'>Location</span>
                <span className='secondaryText'>Watermark Business Park, Karen NBO, KE</span>
            </div>
        </div>
    </section>
  )
}

export default Footer