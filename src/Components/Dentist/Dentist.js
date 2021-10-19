import React from 'react';
import './Dentist.css'

const Dentist = () => {
    return (
        <div className='container py-10'>
            <hr className=" text-white" />
            <div className=' text-red-500 mt-10'>
                <h3>Our Specialized and </h3>
                <h1 className='fw-bold'>Experienced Dentist</h1>
            </div>
            <div className='row g-3'>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='card card-body dentist-card'>
                        <div>
                            <img src="https://i.ibb.co/2vTNj9f/doctor-new-6.jpg" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Dr. John Melborn</h2>
                            <p>Prosthodontics Dentist</p>
                        </div>

                        <div className='card-footer bg-white'>
                            <div className='text-center'>
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-facebook"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-twitter"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-instagram-square"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='card card-body dentist-card'>
                        <div>
                            <img src="https://i.ibb.co/wC6vKMk/doctor-new-3.jpg" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Dr. Ena Dicrosa</h2>
                            <p>Aesthetic Dentistry</p>
                        </div>
                        <div className='card-footer bg-white'>
                            <div className='text-center'>
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-facebook"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-twitter"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-instagram-square"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='card card-body dentist-card'>
                        <div>
                            <img src="https://i.ibb.co/88kKWTm/doctor-new-4.jpg" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Dr. Addison Smith</h2>
                            <p>Gastroenterologists</p>
                        </div>
                        <div className='card-footer bg-white'>
                            <div className='text-center'>
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-facebook"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-twitter"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-instagram-square"></i >
                                <i style={{ fontSize: '30px' }} className="  text-indigo-500 px-2 fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dentist;