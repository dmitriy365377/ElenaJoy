import React from 'react'
import './contact.styles.scss'
import photo from'../../images/contact-image.jpg'



const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__wrapper'>
                <h2>
                    Get in  <br />
                    <span> touch.</span>
                </h2>
                <form>
                    <label for='email'>Your email:</label>
                    <input  className='contact__inp' type='email'> 
                    </input>
                </form>
                <button className="contact__btn" type="submit">
                    Submit
                </button>
            </div> 
            <img className='contact__photo' src={photo} />
        </section>
    )
}


export default Contact