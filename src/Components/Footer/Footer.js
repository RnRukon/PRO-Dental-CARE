import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerBg py-14">
            <div className="container">
                <div style={{ marginTop: '50px' }} className='row text-white '>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h4>Rola</h4>
                        <p>Location: 35 West Dental Street </p>
                        <p>Phone: +088 123 654 987</p>
                        <p> Email: info@rola.com </p>
                        <div>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-facebook"></i>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h4>Useful Links</h4>
                        <Link className='text-white'>About Us</Link><br />
                        <Link className='text-white'>Our Services</Link><br />
                        <Link className='text-white'>Appointment</Link><br />
                        <Link className='text-white'>Contact Us</Link><br />

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h4>Our Services</h4>
                        <p>Cosmetic Dentistry </p>
                        <p>General Dentistry</p>
                        <p> Certified Dentist </p>
                        <p> New Technology </p>
                        <p> Accept Insurance</p>

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h4>Support</h4>
                        <p>Our Dentist </p>
                        <p>Privacy Policy</p>
                        <p>Our Pricing</p>

                    </div>
                </div>
                <hr className="text-white" />
                <div className='text-center'>
                    <small className="text-white">Copyright © 2021 Rola is <span className="text-red-500">Pro Dental Care</span></small>
                </div>
            </div>
        </div>
    );
};

export default Footer;