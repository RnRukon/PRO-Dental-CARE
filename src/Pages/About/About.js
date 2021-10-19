import React from 'react';
import './About.css'
import AboutPageImg from './img/about-1-removebg-preview.png'
const About = () => {
    return (
        <div className='pt-10 about-container'>
            <h1 className='text-center text-pink-500 my-5'>---- About Us ----</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 pb-20'>
                        <img src={AboutPageImg} alt="" />
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-12'>
                        <h1 className="text-yellow-600">Our Patients Are Our Priority, We Offer Quality Dental Services</h1>
                        <p className="text-pink-900">To help us ensure that your first visit is a smooth process we recommend that you complete the health history information 48 hrs in advance and provide us with the insurance information if you have any. You can do so by clicking here

                            Our typical new patient appointment last anywhere between 60-90 minutes.

                            Please let us know if you need any special accommodations for your visit.

                            Please feel free to let our front desk team know if you have any questions or concerns about your visit. If you have any specific concerns and need to speak to the Doctor in advance about them then Dr. Karri will be happy to talk to you over the phone before your visit.

                            Make sure to bring your list of medications to your visit.

                            If you are pregnant or using blood thinners or have health conditions that may require premeds before your appointment(like history of infective endocarditis, artificial heart valves,  artificial joints, severely immunocompromised etc. ) let us know in advance, so that we may request clearance from your physician if needed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;