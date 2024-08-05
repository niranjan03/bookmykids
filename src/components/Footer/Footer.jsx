import React from 'react'
import '../Footer/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faXTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container text-left">
        <div className="row">
          <div className="col-6 col-md-3">
            <h5 className='footer-title'>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Partner</li>
              <li>How we work</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h5 className='footer-title'>Artists and Recruiters </h5>
            <ul>
              <li>Casting Calls</li>
              <li>Join our Community</li>
              <li>Agencies</li>
              <li>Popular Auditions</li>
              <li>Post a Job</li>
              <li>Find Talent</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="col-6 col-md-5">
            <h5 className='footer-title'>Support</h5>
            <ul>
              <li>Help</li>
              <li>Pricing</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-12 Social">
            <span>Connect with us</span>
            <ul>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faXTwitter} /></li>
              <li><FontAwesomeIcon icon={faFacebookF} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
