import { t } from "../../../i18n/i18n";
import { TMenuOptions } from "./MenuOptions.type";

export const MENU_OPTIONS: TMenuOptions[] = [
  {
    label: t("menuOptions.aboutProject"),
    path: "/",
  },
  {
    label: t("menuOptions.aboutIaeste"),
    path: "https://www.iaeste.pl/",
  },
  {
    label: t("menuOptions.workshops"),
    path: "/workshops",
  },
  {
    label: t("menuOptions.partners"),
    path: "/partners",
  },
  {
    label: t("menuOptions.companies"),
    path: "/companies",
  },
];
