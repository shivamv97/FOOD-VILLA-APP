import { useEffect, useState } from "react";

const UseOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(false);
    });
    window.addEventListener("offline", () => {
      setIsOnline(true);
    });
  });

  return isOnline; //returns true or false
};

export default UseOnline;
