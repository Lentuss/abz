import React from 'react'

import Heading from 'common/Heading'
import success from '../../assets/icons/success-image.svg'

const SuccessMessage = () => {
    return (
        <div className='success-message'><Heading text='User successfully registered' /><img src={success} alt='success' /></div>
    )
}

export default SuccessMessage