import { useEffect, useState } from "react";
import s from "./Welcome.module.scss";
import { t } from "../../../../../i18n/i18n";
import { Button } from "../../../../../components/atoms/button/Button";
import { useNavigate } from "@tanstack/react-router";

const WelcomeSection = () => {
  const [sectionHeight, setSectionHeight] = useState<number>(1080);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate({
      to: "/workshops",
    });
  };

  useEffect(() => {
    const navbarHeight = document.getElementById("navbar")?.clientHeight;
    const sectionHeight = window.innerHeight - (navbarHeight || 0);
    setSectionHeight(sectionHeight);
  }, []);

  return (
    <section style={{ height: sectionHeight }} className={s.heroContainer}>
      <div className={s.headingsWrapper}>
        <h1 className={s.heroHeader}>{t("homepage.hero.h1")}</h1>
        <h3 className={s.heroSubheader}>{t("homepage.hero.h3")}</h3>
        <div className={s.buttonsWrapper}>
          <Button onClick={handleClick} title={t("homepage.components.button")} />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
