import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 pt-4">
      <div className="container pt-5">
        <div className="row">
          
          <div className="col-md-4">
            <div>
              <img src='' alt='logo image' className='' />
              <h5>Cooli Connect</h5>
            </div>
            <p>Kooli Connect is a platform that links individuals with diverse work opportunities</p>
          </div>
          
          <div className="col-md-3 q-links">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Post Job</a></li>
              <li><a href="#" className="text-white">Search Jobs</a></li>
              <li><a href="#" className="text-white">Job Details</a></li>
              <li><a href="#" className="text-white">User Profile</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <p><i className="fas fa-map-marker-alt me-2"></i> 123 Street Name, City, Country</p>
            <p><i className="fas fa-envelope me-2"></i> Email: info@example.com</p>
            <p><i className="fas fa-phone-alt me-2"></i> Phone: +1 234 567 890</p>
          </div>
          
          <div className="col-md-2 d-flex justify-content-center align-items-center flex-column">
            <h5 className='mb-4'>Connect with us</h5>
            <div className='d-flex justify-content-center align-items-center'>
              <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a><br />
              <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a><br />
              <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a><br />
              <a href="#" className="text-white me-4"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <hr class="my-3" />

        <div className="text-center mt-4 footer-copy-sec">
          <p className="mb-0">© 2024 Cooli Connect. All rights reserved.</p>
          <div className='footer-privacy-sec'>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
              <li>Disclaimers</li>
              <li>Cookies Setting</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
