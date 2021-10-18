import React from 'react';

const Dentist = () => {
    return (
        <div className='container mt-20'>
            <hr className=" text-white" />
            <div className=' text-red-500 mt-20'>
                <h3>Our Specialized and </h3>
                <h1 className='fw-bold'>Experienced Dentist</h1>
            </div>
            <div className='row g-3'>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='card card-body'>
                        <div>
                            <img src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-3.jpg" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Dr. John Melborn</h2>
                            <p>Prosthodontics Dentist</p>
                        </div>

                        <div className='card-footer'>
                            <div>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='card card-body'>
                        <div>
                            <img src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-4.jpg" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Dr. Ena Dicrosa</h2>
                            <p>Aesthetic Dentistry</p>
                        </div>
                        <div className='card-footer'>
                            <div>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='card card-body'>
                        <div>
                            <img src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/10/doctor-new-6.jpg" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Dr. Addison Smith</h2>
                            <p>Gastroenterologists</p>
                        </div>
                        <div className='card-footer'>
                            <div>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-facebook"></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dentist;