import { useCallback, useRef } from "react";

const useThrottle = (cb, delay) => {
  const timeoutRef = useRef(null);

  const throttledFn = useCallback(
    (...args) => {
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          cb(...args);
          timeoutRef.current = null; // reset for next calls
        }, delay);
      }
    },
    [cb, delay]
  );

  return throttledFn;
};

export default useThrottle;
