import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RnRukon/aissignment-10-json-file/master/servicesdata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' pb-20 '>

            <div className=' container-fluid mt-10 sub-content '>
                <div className='container'>
                    <div className="m-0  py-20 text-yellow-400 ">
                        <h2>Our Clients are Our Priority,<br /> We Offer <span className="fw-bolder text-red-500">Pro Dental Care</span><br /> of Specialists</h2>
                        <h5>Enjoy Specialized Care Through Precision,<br /> Artistry, And Experience</h5>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h1 className=' text-center py-8 text-pink-300 fw-bold'>++++ <span className='text-red-500'>Services</span>++++</h1>
                <div className="row g-4 mt-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;