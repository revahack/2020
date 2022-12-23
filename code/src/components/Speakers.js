import React from "react";
import "../css/Speakers.css";
import Punit_Chawla from "../images/speakers/Punit_Chawla.jpg";
import Ahmed_aqib from "../images/speakers/Ahmed_aqib.jpg";
import Akash_James from "../images/speakers/Akash_James.jpeg";
import Kunal_Kushwaha from "../images/speakers/Kunal_Kushwaha.jpg";
import SMR from "../images/speakers/Singam_Mohit_Reddy.png";
import AG from "../images/speakers/Alon_Grinshpoon.png";
import EP from "../images/speakers/Emily_Perry.jpg";
import SREE from "../images/speakers/shreevallabha.jpg";
import Himanshu from "../images/speakers/Himanshu_Ranjan.png"
import Vishnu from "../images/speakers/Vishnu.jpeg"


function Speakers() {
  return (
    <div className="speakers">

      <div className="page_container">
          <br /><br />
          <h1 className="ta_center title">Speakers</h1>
          <br /><br />

          <div className="column large10 medium12 small12 center spk">

            <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
              <a href="https://www.linkedin.com/in/punitweb" target="_blank">
              <img className="column large12 medium12 small12" src={Punit_Chawla} />
              <h6 className="primary_white nametag">Punit Chawla</h6>
              </a>
            </div>

            <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
              <a href="https://www.linkedin.com/in/alongrinshpoon" target="_blank">
              <img className="column large12 medium12 small12" src={AG} />
              <h6 className="primary_white nametag">Alon Grinshpoon</h6>
              </a>
            </div>

            <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
              <a href="https://www.linkedin.com/in/ahmed-aqib" target="_blank">
              <img className="column large12 medium12 small12" src={Ahmed_aqib} />
              <h6 className="primary_white nametag">Aqib Ahmed</h6>
              </a>
            </div>

        </div>

        <div className="column large10 medium12 small12 center spk">

          <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/akashjames" target="_blank">
            <img className="column large12 medium12 small12" src={Akash_James} />
            <h6 className="primary_white nametag">Akash James</h6>
            </a>
          </div>

          <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/singam-mohit-reddy-a96a01152" target="_blank">
            <img className="column large12 medium12 small12" src={SMR} />
            <h6 className="primary_white nametag">Singam Mohit Reddy</h6>
            </a>
          </div>

          <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/kunal-kushwaha" target="_blank">
            <img className="column large12 medium12 small12" src={Kunal_Kushwaha} />
            <h6 className="primary_white nametag">Kunal Kushwaha</h6>
            </a>
          </div>

        </div>

        <div className="column large10 medium12 small12 center spk">

          <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/epperry3" target="_blank">
            <img className="column large12 medium12 small12" src={EP} />
            <h6 className="primary_white nametag">Emily Perry</h6>
            </a>
          </div>

          <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/asv0018" target="_blank">
            <img className="column large12 medium12 small12" src={SREE} />
            <h6 className="primary_white nametag">Sreevallabha</h6>
            </a>
          </div>

          <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/himanshuranjan30" target="_blank">
            <img className="column large12 medium12 small12" src={Himanshu} />
            <h6 className="primary_white nametag">Himanshu Ranjan</h6>
            </a>
          </div>

        </div>
        
        <div className="column large10 medium12 small12 center spk">
        <div className="column large4 medium8 small12" style={{margin:"0.2rem"}}>
            <a href="https://www.linkedin.com/in/vishnu-sai-224004195" target="_blank">
            <img className="column large12 medium12 small12" src={Vishnu} />
            <h6 className="primary_white nametag">Vishnu Sai</h6>
            </a>
          </div>
        </div>

      </div>

    <br/>
    <br/>
    <br/>
    <br/>
  </div>);
}

export default Speakers;
