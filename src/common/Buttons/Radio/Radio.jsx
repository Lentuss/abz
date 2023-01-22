import React from 'react'
import { Field } from 'formik'

const Radio = ({ positions }) => {
    return (
        <div className="radio-btn">
            <p>Select your position</p>
            <div className='radio-btn__group' role="group" aria-labelledby="position-radio-group">
                {positions.length > 0 && positions.map((position) =>

                    <div key={position.id} className="radio-btn__item">
                        <Field className='radio-btn__input'
                            type="radio"
                            name="position_id"
                            id={`position${position.id}`}
                            value={`${position.id}`} />
                        <span className='radio-btn__input--false'></span>
                        <label htmlFor={`position${position.id}`}>
                            {position.name}
                        </label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Radio
