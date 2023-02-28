import AssignmentDisplay from "../AssignmentDisplay";

import W2_Assignment1 from "./W2_Assignment1";
import W2_Assignment2 from "./W2_Assignment2";

function Week2() {
  return (
    <div className="section">
      <h3> Week 2 - Data and State</h3>
      <AssignmentDisplay asm="1 - Dynamic events" result={<W2_Assignment1 />} />

      <AssignmentDisplay
        asm="2 - Managing state in React"
        result={<W2_Assignment2 />}
      />
    </div>
  );
}

export default Week2;
