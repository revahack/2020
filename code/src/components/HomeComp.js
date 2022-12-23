import React, { Component } from "react";
import Footer from "./FooterComp";
import Sponsors from "./Sponsors";
import Prizes from "./Prizes";
import Cover from "./Cover";
import About from "./About";
import Schedule from "./Schedule";
import Tracks from "./Tracks";
import Bounties from "./Bounties"

class Home extends Component {
  render() {
    const hideloader = () => {
      document.getElementById("loadScreenhome").style.display = "none";
    };

    return (
      <section className="home" onLoad={hideloader}>
        <div
          id="loadScreenhome"
          className="modal_container"
          style={{
            display: "block",
            background: "#2e2e2eee",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="center middle">
            <div className="simple_progress_bar"></div>
          </div>
        </div>

        <div>
          <Cover />
          <About />
          <Tracks />
          <Prizes />
          <Bounties />
          <Schedule />
          <Sponsors />
          <Footer />
        </div>
      </section>
    );
  }
}

export default Home;
