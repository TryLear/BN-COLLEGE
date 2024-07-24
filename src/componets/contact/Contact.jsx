import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import contact from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93e234b4-22eb-4567-ac73-3d46c3bf6fcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque velit corrupti laboriosam eos tempora cum quis distinctio consequuntur obcaecati consectetur quae aut eius similique voluptates aspernatur repellendus, minima dicta sequi dolo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit natus consequatur quis repudiandae facilis, nisi impedit iusto similique odio!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@AadilAhmad.dev</li>
                <li> <img src={contact} alt="" />+91 9067896755</li>
                <li> <img src={location} alt="" />77 BN College Ave Lucknow <br />mA 039810, united</li>
            </ul>

        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required />
            <label>Your Phone Number</label>
            <input type="text"  required placeholder='Enter your Phone Number' />
            <label>Write your Message Here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submt' className='btn dark-btn'>Submit now <img src={arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact