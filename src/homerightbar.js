import React from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import Funnel from "./Funnel.svg";
import Maindown from "./maindown";

const Homerightbar = () => {
    const [date, setDate] = React.useState('Select dates');
    const DateSelect = () => {
        setDate(<input type="date" />);
    }
    return (
      <div className="rightsidebar">
        <header className="head">
          <p>Internships</p>
          <div>
            <a href="#" className="newintern">
              <FaPlusSquare />
              Create New Internship
            </a>
          </div>
        </header>
        <div className="main">
          <section className="maintop">
            <div className="insightbox">
              <div className="insightsmallbox">
                <h4 className="insight">Internship Insights</h4>
                <p className="insighttext">
                  In the eighteenth century the German philosopher Immanuel Kant
                  developed atheory of knowledge in which knowledge about space
                  can be bothe a priori and synthetic.
                </p>
              </div>
            </div>
            <div className="barbox">
              <div className="bartop">
                <div className="weekmonth">
                  <p className="week wm">This week</p>
                  <p className="month wm dm">This month</p>
                </div>
                <p className="selectdate wm dm" onClick={DateSelect}>
                  <FaCalendarDay />
                  <p>{date}</p>
                </p>
              </div>
              <div className="barbottom">
                <div className="chartbox">
                  <img src={Funnel} alt="funnel" className="funnel" />
                </div>
                <div className="range"></div>
              </div>
            </div>
          </section>
          <Maindown />
        </div>
      </div>
    );
}

export default Homerightbar
