import { useEffect, useState } from "react";

const useOnline = () => {
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
