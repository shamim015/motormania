import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bike from '../../../images/banner-bike.jpg'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}
const TopBanner = () => {
    return (
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100  img"
                    src={bike}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Find the Best
                        Motorbike Parts<br />
                        For Your Vehicle
                    </h1>
                    <Link to="/moreProduct"><Button >Explore</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel >
    );
};

export default TopBanner;