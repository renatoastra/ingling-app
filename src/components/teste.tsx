"use client";

import useTranslation from "next-translate/useTranslation";

export const Teste = () => {
  const { t, lang } = useTranslation("xesque");

  return <h1>{t("title")}</h1>;
};
