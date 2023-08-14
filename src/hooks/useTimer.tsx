import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(
    Math.floor(
      (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
        new Date().getTime()) /
        1000
    )
  );

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
