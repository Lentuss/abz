import React from 'react'
import TextTruncate from 'react-text-truncate';
import PropTypes from 'prop-types'

import Tooltip from 'common/Tooltip'

const Card = ({ data }) => {
    return (
        <div className='user'>
            <img className='user__avatar' src={data.photo} alt='avatar' />
            <div className="user__wrapper">

                <TextTruncate
                    className='user__name truncate'
                    line={1}
                    element="h3"
                    truncateText="…"
                    text={data.name}
                    textTruncateChild={<Tooltip value={data.name} />}
                />
            </div>

            <TextTruncate
                className='truncate'
                line={1}
                element="p"
                truncateText="…"
                text={data.position}
                textTruncateChild={<Tooltip value={data.position} />}
            />
            <TextTruncate
                className='truncate'
                line={1}
                element="p"
                truncateText="…"
                text={data.email}
                textTruncateChild={<Tooltip value={data.email} />}
            />
            <TextTruncate
                className='truncate'
                line={1}
                element="p"
                truncateText="…"
                text={data.phone}
                textTruncateChild={<Tooltip value={data.phone} />}
            />
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card
