import React, { useState } from "react";
import useFakeData from "./useFakeData";

const App = () => {
  const [title, setTitle] = useState("");

  let data = useFakeData(title);

  return (
    <div className="App">
      <input
        type="text"
        value={title}
        onChange={(evt) => {
          setTitle(evt.target.value);
        }}
      />
      <h1>{data.id}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default App;
