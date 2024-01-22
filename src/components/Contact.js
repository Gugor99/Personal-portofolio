import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef()
  const formInitialDetails = {
    user_name: '',
    user_email: '',
    subject: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm('service_z4e81yt', 'template_g9ch3ys', form.current, '3Il9yZyt-1lZpApYl')
      .then((result) => {
        setStatus({ success: true, message: 'Message sent successfully'});
      }, (error) => {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      });
      
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  }
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col xs={12} sm={6} md={6} className="px-1">
                      <input name='user_name' type="text" value={formDetails.user_name} placeholder="Full Name" onChange={(e) => onFormUpdate('user_name', e.target.value)} required />
                    </Col>                  
                    <Col xs={12} sm={6} md={6} className="px-1">
                      <input name='user_email' type="email" value={formDetails.user_email} placeholder="Email Address" onChange={(e) => onFormUpdate('user_email', e.target.value)} required/>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="px-1">
                      <input name='subject' type="text" value={formDetails.subject} placeholder="Subject" onChange={(e) => onFormUpdate('subject', e.target.value)} required/>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
/*
-- html originale dal tutorial--

<form onSubmit={handleSubmit}>
  <Row>
    <Col size={12} sm={6} className="px-1">
      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
    </Col>
    <Col size={12} sm={6} className="px-1">
      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
    </Col>
    <Col size={12} sm={6} className="px-1">
      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
    </Col>
    <Col size={12} sm={6} className="px-1">
      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
    </Col>
    <Col size={12} className="px-1">
      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
      <button type="submit"><span>{buttonText}</span></button>
    </Col>
    {
      status.message &&
      <Col>
        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
      </Col>
    }
  </Row>
</form>

--questa dovrebbe essere la funzione di un AI--

const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    try {
      let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
  
      setButtonText("Send");
  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        let result = await response.json();
        setFormDetails(formInitialDetails);
  
        if (result.code === 200) {
          setStatus({ success: true, message: 'Message sent successfully' });
        } else {
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      } else {
        const textResult = await response.text();
        setStatus({ success: false, message: `Non-JSON response: ${textResult}` });
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setButtonText("Send");
      setStatus({ success: false, message: 'An error occurred, please try again later.' });
    }
  };

--questo è probabilmente quello dal tutorial, la pagina originale o leggermente modificata--

const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };*/