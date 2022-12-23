import React from "react"
import Comingsoon from "../images/comingsoon2.png"
import "../css/ComingSoon.css";

function ComingSoon() {
    return (
        <div className="coming-soon">
            <img src={Comingsoon} alt="coming soon"/>
            <p>Thanks for reaching. Stay tuned !</p>
        </div>
    )
}

export default ComingSoon
