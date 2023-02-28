import AssignmentDisplay from "../AssignmentDisplay";

import W1_Assignment1_2 from "./W1_Assignment1_2";
import W1_Assignment3 from "./W1_Assignment3";
import W1_Assignment4 from "./W1_Assignment4";

function Week1() {
  return (
    <div className="section">
      <h3>Week 1 - React Components</h3>
      <AssignmentDisplay
        asm="1 & 2 - Creating and importing your First component"
        result={<W1_Assignment1_2 />}
      />
      <AssignmentDisplay asm="3 - Passing props" result={<W1_Assignment3 />} />
      <AssignmentDisplay
        asm="4 - Multiple components"
        result={<W1_Assignment4 />}
      />
    </div>
  );
}

export default Week1;
