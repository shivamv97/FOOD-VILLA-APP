import React, { useEffect } from "react";
import GrandChild1 from "./GrandChild1";

function Child1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect child 1");
  }, []);
  console.log("Child 1 rendered");
  return (
    <div>
      Child1
      <GrandChild1 />
    </div>
  );
}

export default Child1;
