import { useEffect, useState } from "react";

export function Test() {
  const [test, setTest] = useState("");
  useEffect(() => {
    console.log("մտավ թեստի մեջ");
    return () => console.log('ջնջեց')
  }, []);
  return (
    <div>
      <input
        type="text"
        value={test}
        onChange={(evt) => setTest(evt.target.value)}
      />
    </div>
  );
}

function Example() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Component Did Mount");
    return () => console.log("Component Did Unmount 1");
  }, []);

  useEffect(() => {
    console.log("Component Did Update");
    return () => console.log("Component Did Unmount 2");
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </div>
  );
}

export default Example;
