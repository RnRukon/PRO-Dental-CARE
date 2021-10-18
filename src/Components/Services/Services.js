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
        <div className='container'>
            <h1 className=' text-center py-8 text-red-500 fw-bold'>Services</h1>
            <div className="text-yellow-50 mb-2">
                <h1>Our Clients are Our Priority,<br /> We Offer <span className="fw-bolder text-red-500">Pro Dental Care</span> <br /> of Specialists</h1>
            </div>
            <div className="row g-4 mt-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;