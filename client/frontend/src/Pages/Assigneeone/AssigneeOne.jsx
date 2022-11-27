import "./AssigneeOne.css";
import { Link } from "react-router-dom";
import SubmitDetails from "./assignee-submit-details";
import line from "./assets/line.jpg"
import AssigneeProfile from "./assigneeProfile";
import img1 from "./assets/img1.jpg";
import img2 from"./assets/img2.jpg";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Filter from "../../components/filter/Filter";
import classes from "../TaskAssigner/Common.module.css";
import add from "./assets/add.jpg"
import AssigneeHeader from "../../components/Assignee-header/header";
import AssigneeToggle from "../../components/AssigneeActive/AssigneeToggle";
import Completed from "../../components/Task completed/Completed"
function AsssigneeOne() {
  const [show, setShow] = useState(false);
  const [open , setOpen] = useState(false)
    return (  
        <>
        <div className="assignee-body">
         <AssigneeHeader />
          <div className="assignee-toggle">
            <AssigneeToggle />
            <div className="assignee-fil">
              <p className={classes.p} onClick={() => setShow(prev => !prev)}>
               Filter
              </p>
              <CiFilter className={classes.svg} />
              {show && (
                <div className={classes.div}>
                  <Filter closeModal={() => setShow(false)} />
                </div>
             )}
            </div>
          </div>
          <div className="assignee-zuri">
            <h1>ZuriChat Feature</h1>
            <div className="assignee-feature">
              <div className="assignee-first">
                <Link className="assignee-frontend">Frontend</Link>
                <p className="s">“Every frontend dev is to take responsibility for two core pages on the main app, or a ZuriChat feature.
                     The functionality assigned to each dev should be put in a spreadsheet and given to me for approval.
                     FE devs without tasks will be assigned something else..”</p>
              </div>  
              <div className="assignee-list">
                <SubmitDetails title="Supporting links:" details="N/A"/>
                <SubmitDetails title="Deadline:" details="November 24th, Thursday 12pm WAT" />
                <SubmitDetails title="Created:" details="November 24th, Thursday 12pm WAT" />
                <div className="timeline">
                  <img src={line} alt="" className="line" />
                  <p className="time">12 hours remaining</p>
                </div>
              </div>
              <div className="link-submit">
                <p>Link to Submission </p>
                <div className="submit-box">
                  <input type="url" className="url" placeholder="Enter Link here"/>
                  <button className="assignee-btn" onClick={() => setOpen(true)}>Submit</button>
                  {open && <Completed closeModal={() => setOpen(false)} />}
                </div>
                <img src={add} alt="" className="add" />
              </div>
            </div>
            <div>
              <h1 className="assignee-comment">Comments</h1>
              <div className="assignee-profile-list">
                <AssigneeProfile img={img1} name="James Bond"/>
                <AssigneeProfile img={img2} name="Samuel.IO"/>
              </div>
            </div>
            <div>
              <input type="text" className="typing"/>
            </div>
            <p className="p-typing">Several people are typing</p>
          </div>
        </div>
        </>
    );
}

export default AsssigneeOne;