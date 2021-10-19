import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Details.css'

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
        <div className='text-yellow-50 py-20 details-container'>

            <div className='container mt-20'>
                <div className='row '>
                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                        <img className='img-fluid detailIms rounded-full' src={img} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{title}</h2>
                        <p>{description}</p><br />
                        <p>{des}</p>
                        <NavLink to="/home">
                            <button class="bg-green-500 active:bg-green-700  text-white  rounded-full py-3 px-6 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                                Back to home
                            </button>
                        </NavLink>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Details;