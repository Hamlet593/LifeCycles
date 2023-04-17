import { useEffect, useState } from "react";

const useFakeData = (title) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (title.length === 2) {
      const handle = setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${title}`)
          .then((stream) => stream.json())
          .then((results) => setData(results));
      }, 1500);
      return () => clearTimeout(handle);
    }
  }, [title]);

  return data;
};

export default useFakeData;
