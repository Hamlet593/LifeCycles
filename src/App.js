import React, { useState } from "react";
import useFakeData from "./useFakeData";

const App = () => {
  const [title, setTitle] = useState("");


  return (
    <div className="App">
      <input
        type="text"
        value={title}
        onChange={(evt) => {
          setTitle(evt.target.value);
        }}
      />
      <h1>{useFakeData(title).id}</h1>
      <p>{useFakeData(title).body}</p>
    </div>
  );
};

export default App;
