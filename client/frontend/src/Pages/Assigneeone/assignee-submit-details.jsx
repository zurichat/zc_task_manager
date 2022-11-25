import "./AssigneeOne.css"
const SubmitDetails = (props) => {
    return (  
      <div className="assignee-submit">
        <p>{props.title}</p>
        <p>{props.details}</p>
      </div>
    );
}
 
export default SubmitDetails;