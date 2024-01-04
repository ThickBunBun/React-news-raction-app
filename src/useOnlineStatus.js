import { useEffect, useState } from "react";

export function useOnlineStatus() {
  //use state
  const [isOnline, setIsOnline] = useState(true);
  //use effect hook with even listener that watches the conntection, sets state true or false.
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    //unmounting function that clears event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
    return isOnline;
}
