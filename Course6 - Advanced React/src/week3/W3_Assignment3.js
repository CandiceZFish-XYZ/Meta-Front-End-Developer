import "./w3a3.css";
import FeedbackForm from "./FeedbackForm";

export default function W3_Assignment3() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="w3a3-app">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}
