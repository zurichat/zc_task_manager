import "./AssigneeOne.css"
function SubmitDetails (props) {
    return (  
      <div className="assignee-submit">
        <p className="assignee-title">{props.title}</p>
        <p>{props.details}</p>
      </div>
    );
}
 
export default SubmitDetails;