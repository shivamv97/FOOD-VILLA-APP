import React from "react";
import GrandChild1 from "./GrandChild1";

function Child1() {
  console.log("Child 1 rendered");
  return (
    <div>
      Child1
      <GrandChild1 />
    </div>
  );
}

export default Child1;
