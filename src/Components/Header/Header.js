import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <Carousel fade style={{ marginTop: '60px' }}>
            <Carousel.Item >
                <img

                    className="d-block img-fluid  w-100"
                    src="https://i.ibb.co/c3drcPS/slides-bg1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-pink-500 fw-bolder font md:text-sm'>HOW TO TAKE CARE OF YOUR TEETH </h3>
                    <p className=' text-indigo-500 fw-bold'>Enjoy Specialized Care Through <br /> Precision, Artistry, And Experience</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block img-fluid w-100"
                    src="https://i.ibb.co/JKmwk5Z/slides-bg2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='text-pink-500 fw-bolder'>Exceptional Care for Women</h1>
                    <h5 className=' text-indigo-500 fw-bold'>Features That You Will Love Us and Enjoy Specialized Care</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block img-fluid w-100"
                    src="https://i.ibb.co/1nspQnn/slides-bg3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='text-pink-500 fw-bolder'>Exceptional Customer Service</h1>
                    <p className=' text-indigo-500 fw-bold'>Enjoy Specialized Care Through  Precision, Artistry, And Experience.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;