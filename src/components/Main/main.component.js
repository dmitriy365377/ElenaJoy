import React from 'react'
import './main.style.scss'


import logo from '../../images/elena-joy.png'
import plant1 from '../../images/plant1.png'
import plant2 from '../../images/plant2.png'

const Main = () => {
  return (
    <>
      <section className='information'>
        <div className='information__list'>
          <h2 className='information__title'>
            Elena Joy <br />
            Photography
        </h2>
          <p className='information__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima assumenda expedita similique quaerat maiores ab, itaque hic explicabo eaque!
        </p>
          <button className='information__button' href="#gallery" >Gallery</button>
        </div>
        <div className='information__image'>
          <img className='image' src={logo} />
          <img className='information__plant1 ' src={plant1} />
          <img className='information__plant2' src={plant2} />
        </div>
      </section>
      
    </>
  )
}

export default Main