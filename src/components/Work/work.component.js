import React from 'react'
import './work.styles.scss'
import gallery1 from '../../images/gallery-1.jpg'
import gallery2 from '../../images/gallery-2.jpg'
import gallery3 from '../../images/gallery-3.jpg'
import gallery4 from '../../images/gallery-4.jpg'

const Work = () => {
    return (
        <div className='gallery'> 
            <img className="gallery__photo-1" src={gallery1} />
            <img className="gallery__photo-2" src={gallery2} />
            <img className="gallery__photo-3" src={gallery3} />
            <img className="gallery__photo-4" src={gallery4} />
        </div>
    )
}


export default Work