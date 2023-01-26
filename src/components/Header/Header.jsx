import React from 'react'
import { Button } from 'common/Buttons'

import { animateScroll as scroll, scroller } from 'react-scroll';

import logo from 'assets/icons/Logo.svg'

const Header = () => {

    const goToUsers = () => {
        console.log('move')
        scroller.scrollTo('users', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: 100

        })
    }

    const goToRegister = () => {
        console.log('go');
        scroller.scrollTo('register', {
            duration: 1200,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: 100
        })
    }

    return (
        <header className="header" >
            <div className="container">
                <div className="header__wrapper">
                    <img className='logo' src={logo} alt='logo' width='104px' height='26px' />
                    <div className="header__nav">
                        <Button text={'Users'}
                            onClick={goToUsers}
                        />
                        <Button text={'Sign up'}
                            onClick={goToRegister}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header