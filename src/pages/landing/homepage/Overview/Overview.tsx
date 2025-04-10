import icw_logotype from "../../../../assets/img/icw_logotype.svg";
import overview_1 from "../../../../assets/img/overview_1.png";
import overview_2 from "../../../../assets/img/overview_2.png";
import cogwheel_light_icon from "../../../../assets/icons/cogwheel_light_icon.svg";
import AnimatedNumbers from "react-animated-numbers";
import s from "./Overview.module.scss";

const STATISTICS = {
    workshops: 160,
    universities: 10,
    companies: 60,
    cities: 9,
};

export function Overview() {
    return (
        <section className={s.overview}>
            <div className={s.overviewContent}>
                <img
                    src={icw_logotype}
                    alt="IAESTE CASEWEEK logotype"
                    className={s.logo}
                />

                <p className={s.description}>
                    Największy cykl warsztatów inżynierskich w Polsce. Założeniem projektu jest zbliżenie do siebie środowiska akademickiego i biznesowego. Praktyczna forma case study umożliwia studentom zapoznanie się z realnymi problemami występującymi w codziennej pracy oraz doskonalenie swoich umiejętności zarówno zawodowych, jak i miękkich.
                </p>
            </div>

            <div className={s.statistics}>
                <img src={overview_1} className={s.image} />

                <div className={s.stat}>
                    <AnimatedNumbers animateToNumber={STATISTICS.workshops} fontStyle={{ fontSize: "4rem", fontWeight: "bold", color: "#5A4C32" }} />
                    <span className={s.statLabel}>Workshops</span>
                </div>

                <img src={overview_2} className={s.image} />

                <div className={s.stat}>
                    <AnimatedNumbers animateToNumber={STATISTICS.universities} fontStyle={{ fontSize: "4rem", fontWeight: "bold", color: "#5A4C32" }} />
                    <span className={s.statLabel}>Universities</span>
                </div>

                <div className={s.statGroup}>
                    <div className={s.stat}>
                        <AnimatedNumbers animateToNumber={STATISTICS.companies} fontStyle={{ fontSize: "4rem", fontWeight: "bold", color: "#5A4C32" }} />
                        <span className={s.statLabel}>Companies</span>
                    </div>
                    <div className={s.stat}>
                        <AnimatedNumbers animateToNumber={STATISTICS.cities} fontStyle={{ fontSize: "4rem", fontWeight: "bold", color: "#5A4C32" }} />
                        <span className={s.statLabel}>Cities</span>
                    </div>
                </div>
            </div>

            <img
                src={cogwheel_light_icon}
                className={s.cogwheel}
                alt="cogwheel"
            />
        </section>
    );
}