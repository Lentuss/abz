import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ value }) => {
    return (
        <span className='tooltip'>{value}</span>
    )
}

Tooltip.propTypes = {
    value: PropTypes.string.isRequired
}

export default Tooltip