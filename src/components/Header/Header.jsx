import React from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'common/Buttons'

import logo from 'assets/icons/Logo.svg'

const Header = props => {
    return (
        <header className="header" >
            <div className="container">
                <div className="header__wrapper">
                    <img className='logo' src={logo} alt='logo' width='104px' height='26px' />
                    <div className="header__nav">
                        <Button text={'Users'} />
                        <Button text={'Sign up'} />
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {}

export default Header