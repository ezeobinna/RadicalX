import React from 'react'
import logo from "./RadicalXLogo.svg";
import { FaDelicious } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaDharmachakra } from "react-icons/fa";

const homeleftbar = () => {
    return (
        <div className="leftsidebar">
            <div className="upperleftbar">
            <div>
                <img src={logo} alt="RadicalX" className="logo" />
            </div>
            <ul className="menulist">
                <li>
                <button className="btn">
                    <FaDelicious />
                    Dashboard
                </button>
                </li>
                <li>
                <button className="btn">
                    <FaCertificate />
                    Apprenterships
                </button>
                </li>
                <li>
                <button className="btn">
                    <FaBookReader />
                    Internships
                </button>
                </li>
                <li>
                <button className="btn">
                    <FaBriefcase />
                    jobs
                </button>
                </li>
                <li>
                <button className="btn">
                    <FaDharmachakra />
                    Settings
                </button>
                </li>
            </ul>
            </div>
            <div className="lowerleftbar">
                <div className="rectangle"></div>
                <p className='adam'>Adam Scott</p>
            </div>
        </div>
    );
}

export default homeleftbar
