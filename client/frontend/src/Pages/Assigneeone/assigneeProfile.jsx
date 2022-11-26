import "./AssigneeOne.css"
function AssigneeProfile (props) {
    return (  
      <div className="assignee-profile">
        <img src={props.img} alt="" />
        <div>
          <div className="assignee-profile-name">
            <p>{props.name}</p>
            <p>10:10 AM</p>
          </div>
          <p>Completed</p>
        </div>
      </div>
    );
}
 
export default AssigneeProfile;