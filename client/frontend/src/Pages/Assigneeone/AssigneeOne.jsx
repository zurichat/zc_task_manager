import "./AssigneeOne.css";
import { Link } from "react-router-dom";
import SubmitDetails from "./assignee-submit-details";
import line from "./assets/line.jpg"
import AssigneeProfile from "./assigneeProfile";
import img1 from "./assets/img1.jpg";
import img2 from"./assets/img2.jpg"
function AsssigneeOne() {
    return (  
        <>
        <div className="assignee-body">
          <div className="assignee-nav">
            <Link>Tasks</Link>
            <Link>Notification</Link>
            <Link>History</Link>
          </div>
          <div className="assignee-toggle">
            <div>Active</div>
            <div>Filter</div>
          </div>
          <div className="assignee-zuri">
            <h1>ZuriChat Feature</h1>
            <div className="assignee-feature">
              <div className="assignee-first">
                <Link>Frontend</Link>
                <p className="s">“Every frontend dev is to take responsibility for two core pages on the main app, or a ZuriChat feature.
                     The functionality assigned to each dev should be put in a spreadsheet and given to me for approval.
                     FE devs without tasks will be assigned something else..”</p>
              </div>  
              <div className="assignee-list">
                <SubmitDetails title="Supporting links:" details="N/A"/>
                <SubmitDetails title="Deadline:" details="November 24th, Thursday 12pm WAT" />
                <SubmitDetails title="Created:" details="November 24th, Thursday 12pm WAT" />
                <div className="timeline">
                  <img src={line} alt="" />
                  <p className="time">12 hours remaining</p>
                </div>
              </div>
              <div className="link-submit">
                <p>Link to Submission </p>
                <div className="submit-box">
                  <input type="url" className="url" placeholder="Enter Link here"/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
            <div>
              <h1>Comments</h1>
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