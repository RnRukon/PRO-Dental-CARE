import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, description, img, id } = props.service;
    return (
        <div className=' col-lg-4 col-md-6 col-sm-12'>

            <Link to={`/details/${id}`} className="text-decoration-none card  servicesCard">
                <div className="">
                    <div className=' text-gray-900 card-body'>

                        <img src={img} alt="" />
                        <div className=''>
                            <h1 className='text-pink-500' >{title}</h1>
                            <p >{description.slice(0, 100)} ...</p>
                        </div>
                    </div>
                    <div className='card-footer  bg-white'>
                        <Link to={`/details/${id}`}><button className=" bg-green-500 active:bg-green-700  text-white  rounded-full py-1 px-6 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Details</button></Link>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Service;