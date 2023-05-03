import AssignmentDisplay from "../AssignmentDisplay";

import W1_Assignment1 from "./W1_Assignment1";
import W1_Assignment2 from "./W1_Assignment2";
import W1_Assignment3 from "./W1_Assignment3";

function Week1() {
  return (
    <div className="section">
      <h3>Week 1 - Components</h3>
      <AssignmentDisplay
        asm="1 - Create a basic List component"
        result={<W1_Assignment1 />}
      />
      <AssignmentDisplay
        asm="2 - Create a registration form"
        result={<W1_Assignment2 />}
      />
      <AssignmentDisplay
        asm="3 - Create a light-dark theme switcher"
        result={<W1_Assignment3 />}
      />
    </div>
  );
}

export default Week1;
