function AssignmentDisplay(props) {
  return (
    <div className="assignment">
      <h4> Assignment {props.asm} </h4>
      <div className="result">{props.result}</div>
    </div>
  );
}

export default AssignmentDisplay;
