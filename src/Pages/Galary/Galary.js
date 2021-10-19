import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const [galleryImg, setGalleryImg] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/RnRukon/aissignment-10-json-file/master/galleryimg.json')
            .then(res => res.json())
            .then(data => setGalleryImg(data))
    }, [])

    return (
        <div className='container py-32'>
            <div className="text-center">
                <h1 className=" text-pink-500"><i className="fas fa-tooth  text-white "></i> Pro Dental Care</h1>
                <h1 className='text-center text-green-300 py-4'>Our Gallery</h1>
            </div>
            <div className="row g-2">
                {
                    galleryImg.map(img => <GalleryCard key={img.key} img={img.img}></GalleryCard>)
                }
            </div>

        </div>
    );
};

export default Gallery;