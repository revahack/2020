import React, { Component } from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";
import home from "../images/home.png";
import users from "../images/users.png";
import information from "../images/information.png";
//import calendar from "../images/calendar.png";


class Navbar extends Component {
    render() {
        return (
            <div>

                <div className="pivot_menu primary_white small0" style={{ position: "fixed", top: "0px", bottom: "0px", width: "80px", paddingTop: "30vh" }}>
                    <NavLink to="/coc" className="pivot_button">
                        <img className="def" src={home} alt="home"></img>
                        <span style={{fontSize: "12px"}}>Home</span>
                    </NavLink><br /><br />
                    <NavLink to="/speakers" className="pivot_button">
                        <img className="def" src={users} alt="users"></img>
                        <span style={{fontSize: "12px"}}>Speakers</span>
                    </NavLink><br /><br />
                    <NavLink to="/faqs" className="pivot_button">
                        <img className="def" src={information} alt="information"></img>
                        <span style={{fontSize: "12px"}}>FAQs</span>
                    </NavLink><br /><br />
                </div>

                <div className="bottom_nav large0 medium0">
                    <NavLink to="/coc" className="primary_white ta_center">
                        <img className="def" src={home} alt="home" style={{ height: 45 + 'px', width: 45 + 'px' }}></img>
                    </NavLink>
                    <NavLink to="/speakers" className="primary_white ta_center">
                        <img className="def" src={users} alt="users" style={{ height: 45 + 'px', width: 45 + 'px' }}></img>
                    </NavLink>
                    <NavLink to="/faqs" className="primary_white ta_center">
                        <img className="def" src={information} alt="information" style={{ height: 45 + 'px', width: 45 + 'px' }}></img>
                    </NavLink>
                </div>

            </div>
        );
    }
}

export default Navbar;
