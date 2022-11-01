import React from "react";
import "./contact.css";
import Header from "../../component/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch " image={HeaderImage}>
        Provident error mollitia quidem ipsam quis, repellendus quaerat sunt ad
        placeat, porro temporibus laborum quo iusto ipsa vel rem deleniti.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:viratsinghkaharwar8923@gmail.com" target="_blank" rel="noopener noreferrer">{<MdEmail />}</a>
            <a href="https://wa.me/+917983920962?text=hello I'm interested please guide me" target="_blank" rel="noopener noreferrer">{<IoLogoWhatsapp />}</a>
            <a href="https://m.me/vineet_singh" target="_blank" rel="noopener noreferrer">{<BsMessenger />}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
