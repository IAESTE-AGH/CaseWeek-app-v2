import tie_icon from "../../../../assets/icons/tie_icon.svg";
import hat_icon from "../../../../assets/icons/hat_icon.svg";
import book_icon from "../../../../assets/icons/book_icon.svg";
import people_add_icon from "../../../../assets/icons/people_add_icon.svg";
import atom_icon from "../../../../assets/icons/atom_icon.svg";
import people_icon from "../../../../assets/icons/people_icon.svg";
import { t } from "../../../../i18n/i18n";

export const TILES = [
    { icon: tie_icon, title: t("benefits.tiles.contact.title"), description: t("benefits.tiles.contact.description") },
    { icon: hat_icon, title: t("benefits.tiles.knowledge.title"), description: t("benefits.tiles.knowledge.description") },
    { icon: book_icon, title: t("benefits.tiles.internships.title"), description: t("benefits.tiles.internships.description") },
    { icon: people_add_icon, title: t("benefits.tiles.softSkills.title"), description: t("benefits.tiles.softSkills.description") },
    { icon: atom_icon, title: t("benefits.tiles.innovation.title"), description: t("benefits.tiles.innovation.description") },
    { icon: people_icon, title: t("benefits.tiles.teamwork.title"), description: t("benefits.tiles.teamwork.description") },
];