import { useState, useRef } from "react";

function W4_Assignment() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    // Add the code for the times function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = null;
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{/* add the value of the current total */ result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus} className="cal-button">
          add
        </button>
        {/* Add the subtract button */}
        <button onClick={minus} className="cal-button">
          subtract
        </button>
        {/* Add the multiply button */}
        <button onClick={times} className="cal-button">
          multiply
        </button>
        {/* Add the divide button */}
        <button onClick={divide} className="cal-button">
          divide
        </button>
        {/* Add the resetInput button */}
        <button onClick={resetInput} className="cal-button">
          reset input
        </button>
        {/* Add the resetResult button */}
        <button onClick={resetResult} className="cal-button">
          reset result
        </button>
      </form>
    </div>
  );
}

export default W4_Assignment;
