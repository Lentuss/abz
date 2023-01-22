import React from 'react'
import cx from 'classnames'
import Button from '../Button'
// import PropTypes from 'prop-types'

const MainButton = ({
  text, className, size, type = 'button',
  onClick
}) => {
  const classes = cx('main-btn', className, size)
  return (
    <Button text={text} className={classes} type={type} onClick={onClick} />
  )
}

MainButton.propTypes = {

}

export default MainButton
