import React, { useEffect } from "react";

function GrandChild1() {
  useEffect(() => {
    console.log("useEffect grand child 1");
  }, []);

  console.log("GrandChild 1 rendered");
  return <div>GrandChild1</div>;
}

export default React.memo(GrandChild1);
