import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));

    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
};

export default useOnline;
