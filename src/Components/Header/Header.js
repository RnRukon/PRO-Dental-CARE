import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <Carousel fade>
            <Carousel.Item >
                <img style={{ height: '500px' }}
                    className="d-block img-fluid  w-100"
                    src="https://themes.hibootstrap.com/rola/wp-content/uploads/2021/07/slides-bg1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block img-fluid w-100"
                    src="http://bilalmghl.com/html/timan/extra-images/full-banner-img2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block img-fluid w-100"
                    src="http://bilalmghl.com/html/timan/extra-images/full-banner-img2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;