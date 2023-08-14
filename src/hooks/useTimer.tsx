"use client";

import { useEffect, useState } from "react";

export const useTimer = (initialTimer: number) => {
  const [timer, setTimer] = useState(initialTimer);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  return { hours, minutes, seconds };
};
