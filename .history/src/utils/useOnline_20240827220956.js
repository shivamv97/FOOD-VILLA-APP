import { useEffect, useState } from "react";

const UseOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {});
    window.addEventListener("offline", () => {});
  });

  return isOnline; //returns true or false
};

export default UseOnline;
