import { t } from "../../../../i18n/i18n";
import s from "./Welcome.module.scss";


export function Welcome() {
    const navbarHeight = document.getElementById("navbar")?.clientHeight || 0;
    const sectionHeight = `calc(100vh - ${navbarHeight}px)`;

    return (
        <section
            className={s.welcome}
            style={{
                height: sectionHeight,
            }}
        >
            <div className={s.overlay}>
                <h1 className={s.title}>{t("welcome.title")}</h1>
                <h3 className={s.subtitle}>
                    {t("welcome.subtitle")}
                </h3>
            </div>
        </section>
    );
}