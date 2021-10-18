import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, description, img, id } = props.service;
    return (
        <div className=' col-lg-4'>
            <div className="card">
                <div className='card-body'>

                    <img src={img} alt="" />
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className='card-footer border-0 bg-white'>
                    <Link to={`/details/${id}`}><button className=" detailBtn">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;