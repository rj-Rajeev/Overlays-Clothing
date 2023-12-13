import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="content abtus">
            <h5>ABOUT US</h5>
            <h6>Explore to change</h6>
            <a href="#">Learn More</a>

        </div>
        <div className="content policies">
            <h5>POLICIES</h5>
            <h6>Exchange/Return Your Order <br />
                Shipping Policy <br />
                Exchange and Refund Policy <br />
                Terms and Conditions <br />
                Privacy Policy <br />
                Fraud Protection
            </h6>


        </div>
        <div className="content newsletter">
            <h5>NEWSLETTER</h5>
            <h6>You can be the first one to know about <br />
            our new releases, latest offers and more. <br />
             Sign up now!</h6>
            <input type="text" placeholder='Your E-mail                      ➡' />

        </div>
        <div className="content followus">
            <h5>FOLLOW US</h5>
            <h6>Stay in touch!</h6>
            <div className="soicalIcon">
                <div className="icon facebook"></div>
                <div className="icon twiter"></div>
                <div className="icon instagram"></div>
                <div className="icon Youtube"></div>
            </div>
        </div>
    </div>
    <div className="copyright"><h6>Overlays Clothing - @Developer Rj 2023</h6></div>
    </>
    )
}

export default Footer