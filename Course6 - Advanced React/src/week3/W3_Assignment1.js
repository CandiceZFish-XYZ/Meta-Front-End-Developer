import "./w3a1.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

export default function W3_Assignment1() {
  const [selected, setSelected] = useState("");
  return (
    <div className="w3a1-app">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}
