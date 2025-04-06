import icw_logotype from "../../../../assets/img/icw_logotype.svg";
import overview_1 from "../../../../assets/img/overview_1.png";
import overview_2 from "../../../../assets/img/overview_2.png";
import cogwheel_light_icon from "../../../../assets/icons/cogwheel_light_icon.svg";
import AnimatedNumbers from "react-animated-numbers";

const AN_STYLE: React.CSSProperties = {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#5A4C32",
    width: "1.2ch",
};

const STATISTICS = {
    workshops: 160,
    universities: 10,
    companies: 60,
    cities: 9,
};

export function CaseWeekOverview() {
    return (
        <section
            style={{
                background: "linear-gradient(#DAB88B 15%, #fffffe 25%)",
                padding: "4rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    gap: "2rem",
                    zIndex: 2,
                    position: "relative",
                    color: "#2c2c2c",
                    lineHeight: 2,
                }}
            >
                <img
                    src={icw_logotype}
                    alt="IAESTE CASEWEEK logotype"
                    style={{ width: "100%", marginBottom: "2rem" }} // Dodano margines w dół
                />

                <p
                    style={{
                        fontSize: "1.25rem",
                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                        textAlign: "left",
                    }}
                >
                    Największy cykl warsztatów inżynierskich w Polsce. Założeniem projektu jest zbliżenie do siebie środowiska akademickiego i biznesowego. Praktyczna forma case study umożliwia studentom zapoznanie się z realnymi problemami występującymi w codziennej pracy oraz doskonalenie swoich umiejętności zarówno zawodowych, jak i miękkich.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2rem",
                    zIndex: 2,
                    position: "relative",
                    color: "#2c2c2c",
                    lineHeight: 2,
                }}
            >
                <img src={overview_1} style={{ width: "100%", gridRow: "span 2" }} />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <AnimatedNumbers animateToNumber={STATISTICS.workshops} fontStyle={AN_STYLE} />
                    <span style={{ fontSize: "1.5rem", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>Workshops</span>
                </div>

                <img src={overview_2} style={{ width: "100%", gridRow: "span 2" }} />

                <div style={{ gridRow: "span 2" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <AnimatedNumbers animateToNumber={STATISTICS.universities} fontStyle={AN_STYLE} />
                        <span style={{ fontSize: "1.5rem", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>Universities</span>
                    </div>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
                            textAlign: "center",
                            marginTop: "1rem",
                        }}
                    >
                        Projekt umożliwia studentom i pracodawcom wspólną pracę nad przygotowanymi zagadnieniami. Podczas cyklu warsztatów wiodące marki z rynku polskiego i światowego przeprowadzają warsztaty na najlepszych uczelniach technicznych w kraju. Studenci stają przed możliwością zmierzenia się z realnymi problemami spotykanymi na co dzień w pracy zawodowej. Pracodawcy mają okazję wyłonić talenty i nawiązać współpracę z potencjalnymi kandydatami. Dzięki udziale w projekcie IAESTE CaseWeek tysiące polskich studentów zdobyło wymarzoną pracę.
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <AnimatedNumbers animateToNumber={STATISTICS.companies} fontStyle={AN_STYLE} />
                        <span style={{ fontSize: "1.5rem", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>Companies</span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <AnimatedNumbers animateToNumber={STATISTICS.cities} fontStyle={AN_STYLE} />
                        <span style={{ fontSize: "1.5rem", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>Cities</span>
                    </div>
                </div>
            </div>

            <img
                src={cogwheel_light_icon}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    transform: "translate(-30%, 50%)",
                    zIndex: 0,
                }}
                alt="cogwheel"
            />
        </section>
    );
}