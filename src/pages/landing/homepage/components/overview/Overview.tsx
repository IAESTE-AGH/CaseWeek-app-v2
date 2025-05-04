import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import icw_logotype from "../../../../../assets/img/icw_logotype.svg";
import overview_1 from "../../../../../assets/img/overview_1.png";
import overview_2 from "../../../../../assets/img/overview_2.png";
import cogwheel_light_icon from "../../../../../assets/icons/cogwheel_light_icon.svg";
import { t } from "../../../../../i18n/i18n";
import s from "./Overview.module.scss";

const AN_STYLE: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "4rem",
  fontWeight: 700,
  color: "#5A4C32",
  letterSpacing: "-0.03em",
};

const STATISTICS = {
  workshops: 160,
  universities: 10,
  companies: 60,
  cities: 9,
};

export default function Overview() {
  return (
    <section className={s.overview}>
      <div className={s.statistics}>
        <img
          src={icw_logotype}
          alt={t("overview.logotypeAlt")}
          className={s.logo}
        />

        <p className={s.description}>{t("overview.introText1")}</p>

        <img src={overview_1} className={s.image} alt="overview 1" />

        <div className={s.stat}>
          <AnimatedNumbers
            animateToNumber={STATISTICS.workshops}
            fontStyle={AN_STYLE}
          />
          <span className={s.statLabel}>
            {t("overview.workshopsCounterLabel")}
          </span>
        </div>

        <img src={overview_2} className={s.image} alt="overview 2" />

        <div style={{ gridRow: "span 2" }}>
          <div className={s.stat}>
            <AnimatedNumbers
              animateToNumber={STATISTICS.universities}
              fontStyle={AN_STYLE}
            />
            <span className={s.statLabel}>
              {t("overview.universitiesCounterLabel")}
            </span>
          </div>
          <p className={s.description}>{t("overview.introText2")}</p>
        </div>

        <div className={s.statGroup}>
          <div className={s.stat}>
            <AnimatedNumbers
              animateToNumber={STATISTICS.companies}
              fontStyle={AN_STYLE}
            />
            <span className={s.statLabel}>
              {t("overview.companiesCounterLabel")}
            </span>
          </div>
          <div className={s.stat}>
            <AnimatedNumbers
              animateToNumber={STATISTICS.cities}
              fontStyle={AN_STYLE}
            />
            <span className={s.statLabel}>
              {t("overview.citiesCounterLabel")}
            </span>
          </div>
        </div>
      </div>

      <img
        src={cogwheel_light_icon}
        className={s.cogwheel}
        alt={t("overview.cogwheelAlt")}
      />
    </section>
  );
}
