import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Logo from "../../../assets/img/logo_horizontal.png";
import s from "./LandingMenu.module.scss";

import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOptionsList from "../../organisms/menuOptions/MenuOptions";

const LandingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawerHandler = () => {
    setIsOpen(false);
  };
  return (
    <nav className={s.navContainer} id="navbar">
      <Link to="/">
        <img src={Logo} className={s.logo} />
      </Link>
      <div className={s.desktopOptionsWrapper}>
        <MenuOptionsList />
      </div>
      <div className={s.menuIconWrapper}>
        <MenuIcon
          className={s.menuIcon}
          fontSize="large"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeDrawerHandler}
        className={s.drawer}
        PaperProps={{
          sx: { width: "15rem", backgroundColor: "#171717", padding: "1rem" },
        }}
      >
        <MenuOptionsList onClose={closeDrawerHandler} isInDrawer />
      </Drawer>
    </nav>
  );
};

export default LandingMenu;
