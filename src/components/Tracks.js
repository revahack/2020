import React from "react";
import "../css/Tracks.css";
import ai from "../images/tracks/ai.png";
import cloud from "../images/tracks/cloud.png";
import health from "../images/tracks/health.png";
import iot from "../images/tracks/iot.png";
import ml from "../images/tracks/ml.png";
import vr from "../images/tracks/vr.png";

export default function Tracks() {
  return (
    <div className="tracks">
      <h1>Tracks</h1>

      <div className="trackimg">
        <img
          src={health}
          alt=""
        />
      </div>

      <div className="trackimg">
        <img
          src={vr}
          alt=""
        />
      </div>

      <div className="trackimg">
        <img
          src={cloud}
          alt=""
        />
      </div>

      <br />
      <div className="trackimg">
        <img
          src={iot}
          alt=""
        />
      </div>

      <div className="trackimg">
        <img
          src={ml}
          alt=""
        />
      </div>

      <div className="trackimg">
        <img
          src={ai}
          alt=""
        />
      </div>
    </div>
  );
}
