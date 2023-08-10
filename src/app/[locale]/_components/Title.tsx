"use client";

import { useTranslations } from "next-intl";

export const Title = () => {
  const t = useTranslations("Index");

  return (
    <div>
      <h1>Próximo personagem em 03:38:21</h1>
    </div>
  );
};
