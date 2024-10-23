import React, { useEffect, useState } from "react";
import GrandChild1 from "./GrandChild1";

function Child1() {
  console.log("Child 1 rendered");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect child 1");
  }, []);

  return (
    <div>
      Child1
      <GrandChild1 />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click to see rendering
      </button>
    </div>
  );
}

export default Child1;
