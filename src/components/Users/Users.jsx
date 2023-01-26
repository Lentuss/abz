import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { animateScroll as scroll, scroller } from 'react-scroll';

import { getUsers } from 'redux/users/usersOperations';

import Card from 'common/Card'
import Heading from 'common/Heading'
import { MainButton } from 'common/Buttons'
import Preloader from '../../common/Preloader';


const Users = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const { users } = useSelector(state => state.usersData.usersSlice);
    const { totalPages } = useSelector(state => state.usersData.usersSlice)
    const { isLoggedIn } = useSelector(state => state.usersData.registerSlice);
    const { isLoading } = useSelector(state => state.usersData.registerSlice);
    const dispatch = useDispatch()

    const scrollTo = () => {
        scroller.scrollTo('users', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: 100
        })
    };

    useEffect(() => {
        dispatch(getUsers(currentPage));
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(1)
    }, [isLoggedIn])


    const showMore = () => {
        const page = currentPage + 1;
        setCurrentPage(page)
        scrollTo()
    }

    return (
        <div className="container">
            <div className='users' name='users' id='users'>
                <Heading text='Working with GET request' />
                {isLoading && <Preloader />}
                <ul className='users__list'>
                    {users && users.map(user => (
                        <li key={user.id} className='users__item'>
                            <Card data={user} />
                        </li>))}
                </ul>
                {currentPage < totalPages &&
                    <MainButton size={'large'} text={'Show more'} onClick={showMore} />
                }
            </div>
        </div>
    )
}

export default Users
