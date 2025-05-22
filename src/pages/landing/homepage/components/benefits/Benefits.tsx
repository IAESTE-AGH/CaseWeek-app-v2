import s from "./Benefits.module.scss";
import { t } from "../../../../../i18n/i18n";
import { Button } from "../../../../../components/atoms/button";
import { BENEFITS } from "./Benefits.const";
import { useNavigate } from "@tanstack/react-router";

const Benefits = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({
      to: "/workshops",
    });
  }

  return (
    <section className={s.benefitsContainer}>
      <h2 className={s.benefitsHeading}>
        {t("homepage.benefits.benefitsHeading")}
      </h2>
      <ul className={s.benefitsCardList}>
        {BENEFITS.map((items) => (
          <li className={s.benefitsListItem}>
            <img src={items.icon} className={s.benefitIcon} />
            <h4 className={s.benefitsItemHeading}>{items.title}</h4>
            <p className={s.benefitsItemParagraph}>{items.description}</p>
          </li>
        ))}
      </ul>
      <div className={s.buttonsWrapper}>
        <Button onClick={handleClick} title={t("homepage.components.button")} />
      </div>
    </section>
  );
};

export default Benefits;
