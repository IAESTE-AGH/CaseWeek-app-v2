import { useEffect, useState } from "react";
import { t } from "../../../../i18n/i18n";
import s from "./Welcome.module.scss";
import background from "../../../../assets/img/welcome_bg.png";

export function Welcome() {
    const [sectionHeight, setSectionHeight] = useState<number>(1080);

    useEffect(() => {
        const navbarHeight = document.getElementById("navbar")?.clientHeight || 0;
        const height = window.innerHeight - navbarHeight;
        setSectionHeight(height);
    }, []);

    return (
        <section
            className={s.welcome}
            style={{
                height: sectionHeight,
                backgroundImage: `url(${background})`,
            }}
        >
            <div className={s.overlay}>
                <div className={s.text}>
                    <h1 className={s.title}>{t("welcome.title")}</h1>
                    <h3 className={s.subtitle}>{t("welcome.subtitle")}</h3>
                </div>
            </div>
        </section>
    );
}
