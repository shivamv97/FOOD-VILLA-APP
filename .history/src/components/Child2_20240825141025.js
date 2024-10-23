import React from "react";
import GrandChild2 from "./GrandChild2";

function Child2() {
  console.log("Child 2 rendered");
  return (
    <div>
      Child2
      <GrandChild2 />
    </div>
  );
}

export default Child2;
