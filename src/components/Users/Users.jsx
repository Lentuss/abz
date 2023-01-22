import React from 'react'

import Card from 'common/Card'
import Heading from 'common/Heading'
import { MainButton } from 'common/Buttons'

import data from '../../data.json'


const Users = () => {
    const { users } = data
    return (
        <div className="container">
            <div className='users'>
                <Heading text='Working with GET request' />
                <ul className='users__list'>
                    {users.map(user => (
                        <li key={user.id} className='users__item'>
                            <Card data={user} />
                        </li>))}
                </ul>
                <MainButton size={'large'} text={'Show more'} />
            </div>
        </div>
    )
}

export default Users
