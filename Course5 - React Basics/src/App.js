import { Routes, Route, NavLink } from "react-router-dom";

import Week1 from "./week1 - React Components/Week1";
import Week2 from "./week2 - Date and State/Week2";
import Week3 from "./week3 - Navigation, Updating and Assets in React.js/Week3";
import Week4 from "./week4 - Your first React app/Week4";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Coding Assignments Display </h1>
        <h2>for Course 5 - React Basics</h2>
      </header>
      <main>
        <nav>
          <NavLink
            to="/week1"
            className={({ isActive }) => {
              return "nav-item " + (isActive ? "active" : "");
            }}
          >
            Week 1
          </NavLink>
          <NavLink
            to="/week2"
            className={({ isActive }) => {
              return "nav-item " + (isActive ? "active" : "");
            }}
          >
            Week 2
          </NavLink>
          <NavLink
            to="/week3/*"
            className={({ isActive }) => {
              return "nav-item " + (isActive ? "active" : "");
            }}
          >
            Week 3
          </NavLink>
          <NavLink
            to="/week4"
            className={({ isActive }) => {
              return "nav-item " + (isActive ? "active" : "");
            }}
          >
            Week 4
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Week1 />}></Route>
          <Route path="/week1" element={<Week1 />}></Route>
          <Route path="/week2" element={<Week2 />}></Route>
          <Route path="/week3/*" element={<Week3 />}></Route>
          <Route path="/week4" element={<Week4 />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
