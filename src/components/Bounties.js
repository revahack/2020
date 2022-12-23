import React from "react";
import "../css/Bounties.css";
import matic from "../images/bounties/matic.svg";
import portis from "../images/bounties/portis.svg";
import tezos from "../images/bounties/tezos.png";

function Bounties() {
  return (
    <div className="bounties">
      <h1 className="title">Bounties</h1>
      <div>
        <img src={portis} alt="bounties" />
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/11lWtlNXmNN4pCjIv8s1xdS5JVmk0KMvf/view?usp=sharing">Know More</a>
      </div>
      <div>
        <img src={matic} alt="bounties" />
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1JcFU9yblhNXuqzi2TvBswVZgnlQkD8QP/view?usp=sharing">Know More</a>
      </div>
      <div>
        <img src={tezos} alt="bounties" />
        <a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/devfolio/Tezos-Devfolio-Hackathon-Season-Prize-e90b6811b0df43e5a7dadf534fc000ff">Know More</a>
      </div>
    </div>
  );
}

export default Bounties;
