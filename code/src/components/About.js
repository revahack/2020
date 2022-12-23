import React, { Component } from "react";
import "../css/About.css";
//import slideImage from "../images/Final-01.png";

class About extends Component {
  render() {
    /*
    const showslide1 = () =>{
      document.getElementById("slide1").style.display="block";
      document.getElementById("slide2").style.display="none";
      document.getElementById("slide3").style.display="none";
    }

    const showslide2 = () =>{
      document.getElementById("slide2").style.display="block";
      document.getElementById("slide1").style.display="none";
      document.getElementById("slide3").style.display="none";
    }

    const showslide3 = () =>{
      document.getElementById("slide3").style.display="block";
      document.getElementById("slide1").style.display="none";
      document.getElementById("slide2").style.display="none";
    }

              <div className="column large10 medium10 small12 center">
            <button className="left icon circular" onClick={showslide3}>
              <i className="ms-Icon ms-Icon--Back slideicon"></i>
            </button>
            <button className="right icon circular" onClick={showslide2}>
              <i className="ms-Icon ms-Icon--Forward slideicon"></i>
            </button>
          </div>

    */

    return (
      <section className="aboutbg">
        <div className="column large10 medium12 small12 center">
          <div className="column large8 medium10 small0">
            <h1 className="title ta_center">REVA HACK &lt;/&gt; 2020</h1>
            <br />
            <h6
              style={{lineHeight: "1.25" }}
              className="ta_justify"
            >
              REVA HACK &lt;/&gt; 2020 is a student community-focused virtual
              Hackathon, with an aim of encouraging and providing a platform for
              students to showcase their talents and innovative ideas in
              developing projects through coding and using latest technologies.
              This is the right opportunity to explore your talents in coding
              and programming. Participants can work on an electrifying
              competition, building their idea, improving it as they put in the
              spirit of good sportsmanship, having fun, and making friends along
              the way. There will be tons of action-packed events, prizes, and
              goodies. This would be a perfect stage to showcase your talents.
              In light of the COVID-19 outbreak, we’re taking our hackathon
              virtual for the first time! Your well being is important to us.
              This means that you can participate and connect right from where
              you are.
            </h6>
          </div>
          <div className="column large8 medium10 small12" style={{marginTop:"2rem"}}>
            <h1 className="title ta_center">Why REVA HACK &lt;/&gt; 2020?</h1>
            <br />
            <h6
              style={{ lineHeight: "1.25" }}
              className="ta_justify"
            >
              REVA HACK &lt;/&gt; 2020 is an Online Hackathon, which means it
              provides you the opportunity to participate directly from your
              Home. Hefty Cash prizes and goodies for the winners. Cash prizes
              for tracks. Certificate for all the participants. A Golden
              opportunity to connect with all the participants and having a nice
              interaction with all the speakers.
            </h6>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
