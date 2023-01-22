import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const SharedLayout = props => {
    return (
        <div >
            <Header />
            <Outlet />
        </div>
    );
};

export default SharedLayout;