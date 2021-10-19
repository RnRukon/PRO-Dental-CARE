import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, description, img, id } = props.service;
    return (
        <div className=' col-lg-4 '>
            <Link to={`/details/${id}`} className="text-decoration-none">
                <div className="card servicesCard">
                    <div className='card-body  text-gray-900 '>

                        <img src={img} alt="" />
                        <h1 className='text-pink-500' >{title}</h1>
                        <p >{description}</p>
                    </div>
                    <div className='card-footer border-0 bg-white'>
                        <Link to={`/details/${id}`}><button className=" bg-green-500 active:bg-green-700  text-white  rounded-full py-1 px-6 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Details</button></Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;