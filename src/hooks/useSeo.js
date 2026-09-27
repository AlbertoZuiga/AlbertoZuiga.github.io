import { useTranslation } from "react-i18next";
import { seoFor } from "../data/seo";

export const useSeo = (route) => {
  const { t, i18n } = useTranslation();
  return seoFor(route, i18n.language, t("seo", { returnObjects: true }));
};
