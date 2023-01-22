import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Heading = ({ text, type }) => {
    const classes = cx('heading', type)
    return (
        <h2 className={classes}>{text}</h2>
    )
}

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Heading