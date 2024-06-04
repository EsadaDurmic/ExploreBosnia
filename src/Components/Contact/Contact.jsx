import React, {useEffect, useState} from 'react';
import './contact.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // logicki dio treba dodati ako bude vremena
  };

  return (
    <div data-aos ="fade-up-right" data-aos-duration ="3000 " className="container-contact">
      <div className="contact-content">
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="input-div">
            <label>Name:</label>
            <input class="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-div">
            <label>Email:</label>
            <input class="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-div">
            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button class="btn send" type="submit">Send</button>
        </form><br></br>
        <div class="google-maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.3677339051096!2d17.901674800682557!3d44.19949209315779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee2426aac6381%3A0xff56b13f21ff8b34!2sFakultetska%201%2C%20Zenica%2072000!5e0!3m2!1sen!2sba!4v1717382092323!5m2!1sen!2sba" width="400" height="300" style={{border:"0"}} allowFulScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
  );
};

export default Contact;
