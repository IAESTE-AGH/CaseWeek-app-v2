import s from "./Benefits.module.scss";
import { Button } from "../../../../../components/atoms/button";
import { BENEFITS } from "./Benefits.const";
import { t } from "../../../../../i18n/i18n";

export default function Benefits() {
  return (
    <section
      className={s.benefitsContainer}
      style={{ minHeight: "100vh", padding: "4rem 10vw" }}
    >
      <h2 className={s.benefitsHeading}>{t("benefits.title")}</h2>
      <ul className={s.benefitsCardList}>
        {BENEFITS.map((item, index) => (
          <li key={index} className={s.benefitsListItem}>
            <img src={item.icon} className={s.benefitIcon} alt={item.title} />
            <h4 className={s.benefitsItemHeading}>{item.title}</h4>
            <p className={s.benefitsItemParagraph}>{item.description}</p>
          </li>
        ))}
      </ul>
      <div className={s.buttonsWrapper}>
        <Button title="Zarejestruj się na warsztat" />
      </div>
    </section>
  );
}
