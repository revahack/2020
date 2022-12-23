import React, { Component } from "react";
import "../css/Footer.css";
import logo_instagram from "../images/instagram.png";
import logo_youtube from "../images/youtube.png";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="column large12 medium12 small12 crewbg">
          <h1 className="ta_center title">The Crew</h1>
          <br />
          <h6 className="ta_center center large8 medium10 small12">
            There is a Crew which made REVA HACK possible through their sheer
            hardwork and a will to do something great
          </h6>
          <br />
          <br />
          <button className="large primary_blue">
            <NavLink to="/teams" className="butlink">
              Meet Our Crew
            </NavLink>
          </button>
        </div>
        <div
          className="column large12 medium12 small12 primary_inverted"
          style={{ width: "100vw", padding: "0px 10px" }}
        >
          <div className="column large1 medium1 small0"></div>
          <div className="column large6 medium6 small12"><br /><br />
            <h5>Get In Touch</h5><br />
            <div className="column large6 medium6 small12">
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="blank" className="butlink left">Code Of Conduct</a><br /><br />
              <a href="mailto:revahack@gmail.com" className="butlink left">Ask Questions</a><br /><br />
              <NavLink to="/faqs" className="butlink left">Frequently Asked Questions</NavLink><br /><br /><br /><br />
            </div>
            <div className="column large6 medium6 small12">
              <a href="https://drive.google.com/file/d/1PcIV5t9GzbS7np44Dr6cfAgR651v5wNI/view?usp=sharing" target="blank" className="butlink left">Privacy Policy</a><br /><br />
              <a href="https://drive.google.com/file/d/1mz5f8GeoUSw4qkSCF-JaMZTv5TXPeuBD/view?usp=sharing" target="blank" className="butlink left">Terms and Conditions</a><br /><br />
            </div>
            <a href="http://instagram.com/dscreva"><img src={logo_instagram} className="icon left defdark" alt="instagram" /></a>
            <a href="https://www.youtube.com/channel/UCYHRdTN9GDqUS7rIFE1noBw?sub_confirmation=1"><img src={logo_youtube} className="icon left leftpadicon defdark" alt="youtube"  style={{width:"60px"}}/></a>
            <br /><br /><br />
            <br /><br /><br />
          </div>
          <div className="column large4 medium4 small12">
            <br />
            <br />
            <br />
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.89373821591!2d77.6346617!3d13.1166989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdee225fe28f600f6!2sREVA+University!5e0!3m2!1sen!2sin!4v1522677320198"
              style={{
                border: "none",
                borderRadius: "10px",
                height: "276px",
                width: "100%",
              }}
              allowFullScreen="yes"
            ></iframe>
            <br />
            <br />
            <br />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
