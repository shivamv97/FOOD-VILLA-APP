import React, { useEffect, useState } from "react";
import GrandChild1 from "./GrandChild1";

function Child1() {
  console.log(count);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect child 1");
  }, []);
  console.log("Child 1 rendered");
  return (
    <div>
      Child1
      <button onClick={() => setCount(2)}></button>
      <GrandChild1 />
    </div>
  );
}

export default Child1;
