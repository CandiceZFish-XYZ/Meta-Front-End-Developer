import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";

import { useState } from "react";
import { Link } from "react-router-dom";

function W3_Assignment1() {
  const [showHome, setHome] = useState(true);
  const [showAbout, setAbout] = useState(false);
  const [showContact, setContact] = useState(false);
  return (
    <div>
      <div>
        <nav>
          <Link
            className="nav-item a"
            onClick={(e) => {
              e.preventDefault();
              setHome(true);
              setContact(false);
              setAbout(false);
            }}
          >
            Home
          </Link>
          <Link
            className="nav-item a"
            onClick={(e) => {
              e.preventDefault();
              setHome(false);
              setContact(true);
              setAbout(false);
            }}
          >
            Contact
          </Link>
          <Link
            className="nav-item a"
            onClick={(e) => {
              e.preventDefault();
              setHome(false);
              setContact(false);
              setAbout(true);
            }}
          >
            About
          </Link>
        </nav>
        <div>
          {showHome ? (
            <Homepage />
          ) : showAbout ? (
            <About />
          ) : showContact ? (
            <Contact />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default W3_Assignment1;
