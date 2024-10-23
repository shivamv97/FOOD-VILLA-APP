import React from "react";

function GrandChild2() {
  useEffect(() => {
    console.log("useEffect grand child 1");
  }, []);
  console.log("GrandChild 2 rendered");
  return <div>GrandChild2</div>;
}

export default GrandChild2;
