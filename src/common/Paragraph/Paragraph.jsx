import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Paragraph = ({ text, type }) => {
    const classes = cx('paragraph', type)
    return (
        <p className={classes}>{text}</p>
    )
}

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Paragraph