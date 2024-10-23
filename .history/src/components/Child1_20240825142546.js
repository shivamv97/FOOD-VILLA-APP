import React, { useEffect, useState } from "react";
import GrandChild1 from "./GrandChild1";

function Child1() {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    console.log("useEffect child 1");
  }, []);
  console.log("Child 1 rendered");
  return (
    <div>
      Child1
      <button onClick={() => setCount("shivam")}>BTN</button>
      <GrandChild1 />
    </div>
  );
}

export default Child1;
