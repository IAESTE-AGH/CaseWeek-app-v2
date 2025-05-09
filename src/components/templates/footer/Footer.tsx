import s from "./Footer.module.scss";
import { FOOTER_ICONS } from "./Footer.const";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <ul className={s.iconsList}>
        {FOOTER_ICONS.map((icon, index) => (
          <a href={icon.link} key={index} target="_blank" rel="noreferrer">
            <li
              className={clsx(s.iconsListItem, {
                [s.mediaItem]: index !== 2,
              })}
            >
              <img
                className={index !== 2 ? s.icon : s.logoIcon}
                src={icon.icon}
                alt={icon.alt}
              />
            </li>
          </a>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
