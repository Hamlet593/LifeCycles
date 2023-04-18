import React, { useState } from "react";
import Example from "./Example";
import { Test } from "./Example";

const App = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>Armenia</h1>
      <button onClick={() => setShow1(!show1)}>Click me!</button>
      {show1 ? <Example /> : null}
      <p>This is second Test</p>
      <button onClick={() => setShow2(!show2)}>Click me!</button>
      {show2 ? <Test /> : null}
    </div>
  );
};

export default App;
