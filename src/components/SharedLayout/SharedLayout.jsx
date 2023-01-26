import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const SharedLayout = props => {
    return (
        <div className='layout' id='scroll-container'>
            <Header />
            <Outlet />
        </div>
    );
};

export default SharedLayout;