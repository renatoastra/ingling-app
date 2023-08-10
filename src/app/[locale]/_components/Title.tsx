"use client";

import { useTranslations } from "next-intl";

export const Title = () => {
  const t = useTranslations("Index");

  return <h1>{t("title")}</h1>;
};
