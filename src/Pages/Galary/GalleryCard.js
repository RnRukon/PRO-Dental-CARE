import React from 'react';

const GalleryCard = (props) => {
    const { img } = props;
    return (
        <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="card card-body">
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default GalleryCard;