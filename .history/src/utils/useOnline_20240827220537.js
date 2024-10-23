import { useState } from "react";

const UseOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  return isOnline; //returns true or false
};

export default UseOnline;
