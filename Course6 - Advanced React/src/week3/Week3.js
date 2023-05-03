import AssignmentDisplay from "../AssignmentDisplay";

import W3_Assignment1 from "./W3_Assignment1";
import W3_Assignment2 from "./W3_Assignment2";
import W3_Assignment3 from "./W3_Assignment3";

function Week3() {
  return (
    <div className="section">
      <h3>Week 3 - JSX and testing</h3>
      <AssignmentDisplay
        asm="1 - JSX Deep Dive (Component composition, cross-cutting concerns)"
        result={<W3_Assignment1 />}
      />
      <AssignmentDisplay
        asm="2 - Reusing behavior (Higher-order components, arrow functions, method vs functions, statement vs expression, passing func as args, return a func)"
        result={<W3_Assignment2 />}
      />
      <AssignmentDisplay
        asm="3 - Integration tests with React Testing Library"
        result={<W3_Assignment3 />}
      />
    </div>
  );
}

export default Week3;
