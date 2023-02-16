import React from 'react'
import QualifiedCan from "./QualifiedCan.svg";
import { RiBarChart2Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbTriangleSquareCircle } from "react-icons/tb";

const internspace = () => {
    return (
        <tr>
        <td>
            <div className="productbox">
            <div className="product">
                <h2 className="t">Product Design GVI</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                doloremque dolore deserunt?
                </p>
            </div>
            </div>
        </td>
        <td>
            <div className="productbox">
            <div className="product">
                <h2 className="t">120 days</h2>
                <p>(created on 10/12/2021)</p>
            </div>
            </div>
        </td>
        <td>
            <div className="productbox">
            <div className="product">
                <p className="number">20,000</p>
            </div>
            </div>
        </td>
        <td>
            <div className="productbox">
            <div className="product">
                <img src={QualifiedCan} alt="qualified" className="qc" />
            </div>
            </div>
        </td>
        <td>
            <div className="productbox">
            <div className="product">
                <div className="icons">
                <a href="#">
                    <RiBarChart2Fill />
                </a>
                <a href="#">
                    <IoIosPeople />
                </a>
                <a href="#">
                    <TbTriangleSquareCircle />
                </a>
                </div>
            </div>
            </div>
        </td>
        </tr>
    );
}

export default internspace
