import React from "react";
import "./Footer.css";
import loc from "../../assets/map.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";

const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="contact-us">
        <div id="address">
          <img id="footer-foto" src={loc} alt="" />
          WESTEND COOPERATIVE URBAN THRIFT AND CREDIT SOCIETY LTD., ROHINI{" "}
        </div>
        <div id="contact">
          <img id="footer-foto" src={phone} alt="" />
          <a href="tel:011-27884908">011-27884908</a>
        </div>
        <div id="mail">
          <img id="footer-foto" src={mail} alt="" />
          <a href="mailto:westendtc83@gmail.com">westendtc83@gmail.com</a>
        </div>
      </div>
      <div id="location">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.669614946932!2d77.042183!3d28.609753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0532549d3d7d%3A0x5ddc38895329cca!2sWESTEND%20CO-OPERATIVE%20URBAN%20THRIFT%20%26%20CREDIT%20SOCIETY%20LTD.!5e0!3m2!1sen!2sus!4v1693135912512!5m2!1sen!2sus"
          width="200"
          height="150"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
