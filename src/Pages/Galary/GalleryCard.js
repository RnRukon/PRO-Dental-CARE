import React from 'react';
import './Gallery.css';
const GalleryCard = (props) => {
    const { img } = props;
    return (
        <div className="col-lg-2 col-md-4 col-sm-12 gallery-card">
            <div className="card">
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default GalleryCard;