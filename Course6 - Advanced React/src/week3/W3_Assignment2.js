import "./w3a2.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render(mousePosition);
};

const PanelMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <div className="BasicTracker">
          <p>Mouse position:</p>
          <div className="Row">
            <span>x: {mousePosition.x}, </span>
            <span>y: {mousePosition.y}</span>
          </div>
        </div>
      )}
    />
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

export default function W3_Assignment2() {
  return (
    <div className="w3a2-pp">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}
