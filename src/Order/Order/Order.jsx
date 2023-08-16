import React from 'react';
import Banner from '../../component/Banner/Banner';
import orderImg from '../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Banner bgImg={orderImg} title={'order food'} subTitle={'would you like to try a dish?'}></Banner>
        </div>
    );
};

export default Order;