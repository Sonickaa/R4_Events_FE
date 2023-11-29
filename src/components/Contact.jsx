import "./CSS/Contact.css";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbyawkj",
        "template_jm0qq8b",
        form.current,
        "mY9UVnGPJXUvkCUu-"
      )
      .then(
        (result) => {
          console.log("email send worked", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-main">
        <div className="contact_container">
          <h3 className="contact">
            Thank you for your feedback, thoughts or a little order :
          </h3>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-2" controlId="inlineFormInput">
              <Form.Control type="text" placeholder="Name" name="user_name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="user_email"
              />
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control
                className="message_field"
                as="textarea"
                placeholder="Leave a comment here"
                name="user_subject"
              />
            </FloatingLabel>

            <Button onSubmit={sendEmail} className="send_button" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
