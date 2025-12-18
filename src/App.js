import { useState } from "react";
import Yamde from "yamde";
import { ContentExample } from "./ContentExample";
import "./App.css";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [text, setText] = useState(ContentExample);

  return (
    <div className={`App ${isLightMode ? "light" : "dark"}`}>
      <header className="App-header">
        <h1>Pengedit Markdown</h1>
        <h4>Created by: Ananda</h4>
        <button
          className="mode-toggle btn btn-primary"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          {isLightMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>

      <main>
        <Yamde
          value={text}
          handler={setText}
          theme={isLightMode ? "light" : "dark"}
        />
      </main>
    </div>
  );
}
