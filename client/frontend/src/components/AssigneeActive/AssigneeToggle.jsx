import { Link } from "react-router-dom";
import "./toggle.css"

function AssigneeToggle() {
    return (  
        <div className="assignee-toggle-one">
            <Link to ="/feature" className="assignee-toggle-active active">Active</Link>
            <Link to="/history" className="assignee-toggle-active">History</Link>
        </div>
    );
}

export default AssigneeToggle;