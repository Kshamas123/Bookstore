// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const BookCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.YqypqlEMooyiWeFj44aYYwHaLY?w=201&h=309&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="First slide"
                    height="1000px"
                />
                <Carousel.Caption>
                    <h3>Featured Book 1</h3>
                    <p>Discover this amazing book!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.EGq8qJw4YamVoOHZYNa2DQHaL2?w=197&h=316&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Second slide"
                    height="1000px"
                />
                <Carousel.Caption>
                    <h3>Featured Book 2</h3>
                    <p>Explore the new bestseller!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://th.bing.com/th/id/OIP.U8TD9qwcEsOOT1nOOxCsCQHaLD?w=202&h=302&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Third slide"
                    height="1000px"
                />
                <Carousel.Caption>
                    <h3>Featured Book 3</h3>
                    <p>Get this special offer!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BookCarousel;
