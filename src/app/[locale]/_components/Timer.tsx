"use client";
import { useTimer } from "@/hooks/useTimer";
import { useTranslations } from "next-intl";

interface TimerProps {
  initialTimer: number;
}

export const Timer = ({ initialTimer }: TimerProps) => {
  const { hours, minutes, seconds } = useTimer(initialTimer);
  const t = useTranslations("Index");

  const formatedTimer = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="text-center text-3xl  font-bold text-primary md:mb-4 md:text-4xl">
      <h1 className="mb-2">{t("timer")}</h1>
      <span className="text-center text-6xl sm:text-8xl">{formatedTimer}</span>
    </div>
  );
};
