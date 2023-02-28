import AssignmentDisplay from "../AssignmentDisplay";

import W4_Assignment from "./W4_Assignment";

function Week4() {
  return (
    <div className="section">
      <h3>Week 4 - Your first React app</h3>
      <AssignmentDisplay asm="Calculator App" result={<W4_Assignment />} />
    </div>
  );
}

export default Week4;
