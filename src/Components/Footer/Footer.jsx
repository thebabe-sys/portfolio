import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/HomA.svg'
import underline from '../../assets/nav_underline.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <div className="logo-container">
            <img src={footer_logo} alt="" className='footer-logo-img' />
      <img src={underline} alt="" className='under-img' />
      </div>
                <p>I am a skilled and enthusiastic tech personnel, i am keen on personal and professional development.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                &copy; 2023 Allen Homa Chituru. All rights reserved.
            </p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
