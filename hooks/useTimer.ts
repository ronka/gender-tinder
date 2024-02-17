import { useRef, useCallback } from 'react';

type UseTimerHook = () => {
  start: () => void;
  stop: () => void;
  reset: () => void;
  getTime: () => number;
};

const useTimer: UseTimerHook = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const currentTimeRef = useRef<number>(0);

  const getTime = useCallback(() => currentTimeRef.current, []);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals

    startTimeRef.current = Date.now() - currentTimeRef.current;
    intervalRef.current = setInterval(() => {
      currentTimeRef.current = Date.now() - (startTimeRef.current ?? 0);
    }, 1);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);


  const reset = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    } 

	startTimeRef.current = null;
	currentTimeRef.current = 0;
	intervalRef.current = null
  }, []);

  return { start, stop, getTime, reset };
};

export default useTimer;
