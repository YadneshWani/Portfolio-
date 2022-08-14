import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {PHONE_NUMBER,EMAIL, LOCATION,EMAIL_JS_SERVICE_ID,EMAIL_JS_TEMPLATE_ID,EMAIL_JS_PUBLIC_KEY} from '../components/constants';

function Contact(){
    const form = useRef();
    const sendMail = (e)=>{
        // Issue: PreventDefault doesn't work when request is submitted by form...
        e.preventDefault();

        emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, form.current, EMAIL_JS_PUBLIC_KEY)
        .then((result)=>{
             console.log("Result: "+result.text);
        },(error)=>{
            console.log("Error: "+error.text);
        });
    }
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">{PHONE_NUMBER}</span>
                        </div>
                    </div>

                    <div className="contact__information">
                    <i className="uil uil-envelope contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">{EMAIL}</span>
                        </div>
                    </div>

                    <div className="contact__information">
                    <i className="uil uil-map-marker contact__icon"></i>
                    
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">{LOCATION}</span>
                        </div>
                    </div>
                </div>

                <form ref={form} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" name='name' className="contact__input" required/>
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" name='email' className="contact__input" required/>
                        </div>
                    </div>
                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Subject</label>
                            <input type="text" name='subject' className="contact__input" required/>
                    </div>
                    <div className="contact__content">
                            <label htmlFor="" className="contact__label">Message</label>
                            <textarea name='message' id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>
                    <div>
                        <a href="" onClick={sendMail} className="button button__flex">
                            Send Me <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;