import React from 'react'
import './about.style.scss'
import logo from '../../images/about-image.png'


const About = () => {
    return (
        <section className='about'>
            <div className='about__image'>
                <h5 className='about__minimal'>MINIMAL</h5>
                <img className='about__logo' src={logo} />
            </div>
            <div className="about__text">
                <h2 className="about__name">Elena Joy</h2>
                <div className='about__description'>
                    <h3 className='about__title'>My Life</h3>
                    <p className='about__information'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime reprehenderit. Assumenda necessitatibus id consectetur asperiores harum dolore nihil fuga?</p>
                </div>
                <div className='about__description'>
                    <h3 className='about__title'>My Work</h3>
                    <p className='about__information'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime reprehenderit. Assumenda necessitatibus id consectetur asperiores harum dolore nihil fuga?</p>
                </div>
                <div className='about__description'>
                    <h3 className='about__title'>Get in touch</h3>
                    <p className='about__information'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime reprehenderit. Assumenda necessitatibus id consectetur asperiores harum dolore nihil fuga?</p>
                </div>
            </div>
        </section>
    )
}


export default About