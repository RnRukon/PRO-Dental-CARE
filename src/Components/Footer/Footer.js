import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footerBg py-10">
            <div className="container">
                <div className='row text-white '>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h4>Rola</h4>
                        <p>Location: 35 West Dental Street </p>
                        <p>Phone: +088 123 654 987</p>
                        <p> Email: rukon.js@gamil.com </p>
                        <div >
                            <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-facebook"></i >
                            <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-twitter"></i >
                            <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-instagram-square"></i >
                            <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-linkedin"></i>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h4>Useful Links</h4>

                        <Link to="/services" className='text-white'>Our Services</Link><br />
                        <Link to="/gallery" className='text-white'>Our Gallery</Link><br />
                        <Link to="/about" className='text-white'>About us</Link><br />
                        <Link to="/register" className='text-white'>Register</Link><br />
                        <Link to="/login" className='text-white'>Login</Link><br />

                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <NavLink to='/services'><h4>Our Services</h4></NavLink>
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
        </footer>
    );
};

export default Footer;