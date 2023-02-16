import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import Internspace from "./internspace";

const maindown = () => {
  return (
    <section className="maindown">
      <table id="customers">
        <tr className="it">
          <th className="interntitle">
            <p>
              Internship Title <FaAngleDown />
            </p>
          </th>
          <th className="period">
            <p>
              Completion Period <FaAngleDown />
            </p>
          </th>
          <th className="enrolled">
            <p>
              Total Enrolled <FaAngleDown />
            </p>
          </th>
          <th className="qualified">
            <p>
              Qualified Candidates <FaAngleDown />
            </p>
          </th>
          <th className="status"></th>
        </tr>
        <Internspace />
        <Internspace />
        <Internspace />
        <Internspace />
        <Internspace />
      </table>
    </section>
  );
}

export default maindown







