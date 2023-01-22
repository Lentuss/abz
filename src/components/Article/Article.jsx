import React from 'react'

import Heading from 'common/Heading'
import { MainButton } from 'common/Buttons'
import Paragraph from 'common/Paragraph'

const Article = () => {
    return (
        <div className="article">
            <div className="article__wrapper">
                <Heading text={'Test assignment for front-end developer'} type={'light'} />
                <Paragraph type='light' text={"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."} />
            </div>
            <MainButton text={'Sign up'} isActive={true} />
        </div>
    )
}

export default Article
