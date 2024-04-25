import React from 'react'
import './Contact.css'

//import Mail from '../../assets/mail.jpg';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src="" alt="" />
            
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to contact me anytime. I will try my best to assist you.</p>
                <div className="contact-details">
                    <div className="contact-detail"><p><b>Email:</b> ansh21000@gmail.com</p>
                        <img src="" alt="" />
                    </div>
                    <div className="contact-detail"><p><b>Phone :</b>7020026145</p>
                    <img src="" alt="" />
                    </div>
                    <div className="contact-detail"><p><b>Address:</b> Vellore, TamilNadu</p>
                    <img src="" alt="" />

                    </div>
                </div>
              </div>
            <form className='contact-right' >
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email'  name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8 " placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact
