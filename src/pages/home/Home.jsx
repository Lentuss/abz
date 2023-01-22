import React from 'react'

import HeroBanner from 'components/HeroBanner'
import Users from 'components/Users'
import RegisterForm from 'components/RegisterForm'

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <Users />
            <RegisterForm />
        </div>
    )
}

export default Home