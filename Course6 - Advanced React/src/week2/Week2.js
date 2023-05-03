import AssignmentDisplay from "../AssignmentDisplay";

import W2_Assignment1 from "./W2_Assignment1";
import W2_Assignment2 from "./W2_Assignment2";
import W2_Assignment3 from "./W2_Assignment3";

function Week2() {
  return (
    <div className="section">
      <h3>Week 2 - React Hooks and Custom Hooks</h3>
      <AssignmentDisplay
        asm="1 - Managing state within a component"
        result={<W2_Assignment1 />}
      />
      <AssignmentDisplay
        asm="2 - Can you fetch data?"
        result={<W2_Assignment2 />}
      />
      <AssignmentDisplay
        asm="3 - Create your own custom hook, usePrevious"
        result={<W2_Assignment3 />}
      />
    </div>
  );
}

export default Week2;
