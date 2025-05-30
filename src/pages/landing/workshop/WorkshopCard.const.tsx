import TimelapseIcon from "@mui/icons-material/Timelapse";
import AlarmIcon from "@mui/icons-material/Alarm";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import ListAltIcon from "@mui/icons-material/ListAlt";
import s from "./WorkshopCard.module.scss";

export const WORKSHOP_CARD_DATA = [
  { icon: <SchoolIcon className={s.icons} />, detalName: "" },
  { icon: <AlarmIcon className={s.icons} />, detalName: "" },
  { icon: <TimelapseIcon className={s.icons} />, detalName: "" },
  { icon: <PlaceIcon className={s.icons} />, detalName: "" },
  { icon: <ListAltIcon className={s.icons} />, detalName: "Wymagania:" },
  {
    icon: <ListAltIcon sx={{ color: "transparent" }} />,
    detalName: "Minimalny rok studiów:",
  },
  {
    icon: <ListAltIcon sx={{ color: "transparent" }} />,
    detalName: "Maksymalny rok studiów:",
  },
  {
    icon: <ListAltIcon sx={{ color: "transparent" }} />,
    detalName: "Kierunek studiów:",
  },
];
