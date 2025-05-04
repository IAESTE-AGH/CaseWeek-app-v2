import { Link } from "@tanstack/react-router";
import { MENU_OPTIONS } from "./MenuOptions.const";
import s from "./MenuOptions.module.scss";
import CloseIcon from "@mui/icons-material/Close";

type MenuOptionsListProps = {
  onClose?: () => void;
  isInDrawer?: boolean;
};

const MenuOptionsList = ({
  onClose,
  isInDrawer = false,
}: MenuOptionsListProps) => {
  return (
    <ul className={s.optionsList}>
      {isInDrawer && (
        <li className={s.menuHeaderWrapper}>
          <p className={s.menuLabel}>Menu</p>
          <CloseIcon
            className={s.closeIcon}
            fontSize="large"
            onClick={onClose}
          />
        </li>
      )}
      {MENU_OPTIONS.map((option) => (
        <li key={option.path}>
          <Link
            to={option.path}
            onClick={onClose}
            className={s.optionLink}
            activeProps={{
              className: s.activeLink,
            }}
            activeOptions={{
              exact: true,
            }}
          >
            {option.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOptionsList;
