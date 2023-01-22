import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Upload = ({ onChange }) => {
    const [fileName, setFileName] = useState("")
    return (
        <div className='upload'>
            <label className="upload__label">
                Upload
                <input
                    className="upload__input"
                    type="file"
                    name="photo"
                    placeholder=" "
                    onChange={(event) => {
                        onChange(event.currentTarget.files)
                        setFileName(event.currentTarget.files[0].name)
                    }}
                />
            </label>
            <p className="upload__text">{fileName}</p>
        </div>
    )
}

export default Upload

Upload.propTypes = {
    onChange: PropTypes.func.isRequired
}
