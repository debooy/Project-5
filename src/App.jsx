import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="nav-container">
        <header className="title">🥗Recipe Finder</header>
        <nav>
          <ul className="nav-utils">
            <li>🏠Dashboard</li>
            <li>🔎Search</li>
            <li>❗About</li>
          </ul>
        </nav>
      </div>
      <div className="card-row">
        <header>Card 1</header>
        <header>Card 2</header>
        <header>Card 3</header>
      </div>
    </div>
  );
}

export default App;
