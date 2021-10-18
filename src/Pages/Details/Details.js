import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const { serviceId } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RnRukon/aissignment-10-json-file/master/servicesdata.json')
            .then(res => res.json())
            .then(data => {
                setDetail(data.find(d => d.id === Number(serviceId)) || {});
            })
            .catch((error) => {
                console.log(error)
            })

    }, [serviceId])

    const { img, title, description, des } = detail;
    console.log(detail)

    return (
        <div className='text-yellow-50'>
            <h1>Details pages {serviceId}</h1>

            <div className='container mt-20'>
                <div className='row '>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{title}</h2>
                        <p>{description}</p><br />
                        <p>{des}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;