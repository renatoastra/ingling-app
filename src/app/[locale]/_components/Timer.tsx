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
    <div className="mb-4 text-center  text-2xl font-bold text-primary sm:text-4xl">
      <h1 className="mb-2">{t("timer")}</h1>
      <span className="text-center text-4xl sm:text-8xl">{formatedTimer}</span>
    </div>
  );
};
