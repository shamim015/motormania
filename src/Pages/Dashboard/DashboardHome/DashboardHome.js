import React from 'react';
import { Container } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';

const DashboardHome = () => {
    return (
        <Container>
            <MyOrder></MyOrder>
        </Container>
    );
};

export default DashboardHome;