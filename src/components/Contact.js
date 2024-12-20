import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";


export const Contact = () => {
  const [t] = useTranslation("global")
  const form = useRef()
  const formInitialDetails = {
    user_name: '',
    user_email: '',
    subject: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t("contact.send"));
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText(t("contact.sending"));

    emailjs.sendForm('service_z4e81yt', 'template_g9ch3ys', form.current, '3Il9yZyt-1lZpApYl')
      .then((result) => {
        setButtonText(t("contact.send"));
        setStatus({ success: true, message: t("contact.message-sent")});
      }, (error) => {
        setButtonText(t("contact.send"));
        setStatus({ success: false, message: t("contact.message-error")});
      });
      
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
                <h2>{t("contact.title")}</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col xs={12} sm={6} md={6} className="px-1">
                      <input name='user_name' type="text" value={formDetails.user_name} placeholder={t("contact.name")} onChange={(e) => onFormUpdate('user_name', e.target.value)} required />
                    </Col>                  
                    <Col xs={12} sm={6} md={6} className="px-1">
                      <input name='user_email' type="email" value={formDetails.user_email} placeholder={t("contact.mail")} onChange={(e) => onFormUpdate('user_email', e.target.value)} required/>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="px-1">
                      <input name='subject' type="text" value={formDetails.subject} placeholder={t("contact.subject")} onChange={(e) => onFormUpdate('subject', e.target.value)} required/>
                    </Col>
                    <Col xs={12} sm={12} md={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder={t("contact.message")} onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
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
