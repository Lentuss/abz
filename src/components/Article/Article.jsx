import React from 'react'

import { animateScroll as scroll, scroller } from 'react-scroll';

import Heading from 'common/Heading'
import { MainButton } from 'common/Buttons'
import Paragraph from 'common/Paragraph'

const Article = () => {
    const goToRegister = () => {
        scroller.scrollTo('register', {
            duration: 1200,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: 100
        })
    }
    return (
        <div className="article">
            <div className="article__wrapper">
                <Heading text={'Test assignment for front-end developer'} type={'light'} />
                <Paragraph type='light' text={"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."} />
            </div>
            <MainButton text={'Sign up'} isActive={true} onClick={goToRegister} />
        </div>
    )
}

export default Article
