import React from 'react'
import cx from 'classnames'

const Button = ({
    text,
    className,
    disabled,
    type = 'button',
    onClick
}) => {
    const classes = cx('btn', className)

    return (
        <button className={classes} type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button