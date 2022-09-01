// import React from "react";
// import "./Contact.css";
// import { Button } from "@material-ui/core";

// const Contact = () => {
//   return (
//     <div className="contactContainer">
//       <a className="mailBtn" href="mailto:atifjalal96@gmail.com">
//         <Button>Contact: atifjalal96@gmail.com</Button>
//       </a>
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import "./Contact.css";
import { IoMailOutline } from "react-icons/io5";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MetaData from "../MetaData";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fa1n8sk",
        "template_a72hry4",
        form.current,
        "HHiR89_H5cSyr_Izc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="aboutSection">
      <div>
        <MetaData title="Contact Us" />
      </div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h5">Get In touch</Typography>
        <Typography component="h1">Contact Us</Typography>
        <hr />
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <IoMailOutline className="contact__option-icon" />
              <h4>Email</h4>
              <h5>atifjalal96@gmail.com</h5>
              <a href="mailto:abc@gmail.com" target="_blank">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <BsMessenger className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>atifjalall</h5>
              <a href="https://m.me/atifjalall/" target="_blank">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+92 344 695 9056</h5>
              <a href="https://wa.me/+923453481127/" target="_blank">
                send a message
              </a>
            </article>
          </div>
          {/* End of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full Name"
              required
            />
            <input
              type="Email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
