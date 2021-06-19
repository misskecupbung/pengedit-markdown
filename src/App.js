import { useState } from "react";
import Yamde from "yamde";

import { ContentExample } from "./ContentExample";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [text, setText] = useState(ContentExample);

  return (
    <div className="App">
      <div>
        <h1><center>Pengedit Markdown</center></h1>
      </div>
      <div>
        <h4><center>Created by: Ananda</center></h4>
      </div>
    <div className="btn btn-primary" onClick={() => setIsLightMode(!isLightMode)}>
      {`${isLightMode ? "Dark" : "Light"} Mode`}
    </div>

      <Yamde
        value={text}
        handler={setText}
        theme={isLightMode ? "light" : "dark"}
      />
    </div>
  );
}