import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

const Input = ({ name, className, label, errorName, type }) => {
    return (
        <div className="input">
            <Field className={`input__field ${className}`} type={type} id={name} name={name} placeholder=" " />
            <label className={`input__label ${className}`} htmlFor={name}>{label}</label>
            <p className={`input__tip ${className}`}>{errorName}</p>
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    errorName: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default Input
