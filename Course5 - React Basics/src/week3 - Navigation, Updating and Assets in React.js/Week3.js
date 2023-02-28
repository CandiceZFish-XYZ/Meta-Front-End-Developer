import AssignmentDisplay from "../AssignmentDisplay";

import W3_Assignment1 from "./W3_Assignment1";
import W3_Assignment2 from "./W3_Assignment2";
import W3_Assignment3 from "./W3_Assignment3";

function Week3() {
  return (
    <div className="section">
      <h3>Week 3 - Navigation, Updating and Assets in React.js</h3>
      <AssignmentDisplay
        asm="1 - Creating a route"
        result={<W3_Assignment1 />}
      />
      <AssignmentDisplay
        asm="2 - Displaying images"
        result={<W3_Assignment2 />}
      />
      <AssignmentDisplay asm="3 - Song selection" result={<W3_Assignment3 />} />
    </div>
  );
}

export default Week3;
