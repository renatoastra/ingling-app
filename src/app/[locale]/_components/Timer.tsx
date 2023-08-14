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
    <h1 className="mb-7 mt-2 text-5xl font-bold">
      {t("timer")} {formatedTimer}
    </h1>
  );
};
