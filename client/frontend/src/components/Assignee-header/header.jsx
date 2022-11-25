import { Link } from "react-router-dom";
import bell from "./assets/bell.jpg";
import check from "./assets/check.jpg";
import retry from "./assets/retry.jpg";
import "./assigneeheader.css"
function AssigneeHeader ()  {
    return (  
    <div className="assignee-nav">
      <Link>
       <p>Tasks</p>
       <img src={check} alt="" />
      </Link> 
      <Link>
       <p>Notification</p>
       <img src={bell} alt="" />
      </Link>
      <Link>
       <p>History</p>
       <img src={retry} alt="" />
      </Link> 
    </div>
    );
}
 
export default AssigneeHeader;