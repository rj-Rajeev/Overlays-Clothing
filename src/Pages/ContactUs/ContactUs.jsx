import React from 'react'
import './ContactUs.css'
import DeliveryInfoCard from '../../components/DeliveryInfoCard/DeliveryInfoCard'

const ContactUs = () => {
  return (
    <>
    <div className="contact-us">
    <h1>Contact Us</h1>
    <p>If you have any queries you can reach us at <span>support@overlaysclothing.com.</span> <br />You can also use WhatsApp at the right bottom corner of the website! <br /> We'll get back to you as soon as possible!</p>
    </div>
    <DeliveryInfoCard />

    </>
  )
}

export default ContactUs