import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {

    const handleonline = ()=>{
        () => {
            setIsOnline(true)
    }
    window.addEventListener("online", ;
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline; //returns true or false
};

export default useOnline;
