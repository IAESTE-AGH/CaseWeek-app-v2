import { TILES } from "./Benefits.const";
import s from "./Benefits.module.scss";

export function Benefits() {
    return (
        <section className={s.benefits}>
            <h1 className={s.benefitsTitle}>
                Co zyskujesz dzięki IAESTE CaseWeek?
            </h1>

            {TILES.map((tile, index) => (
                <div key={index} className={s.benefitTile}>
                    <img
                        src={tile.icon}
                        alt={tile.title}
                        style={{ justifySelf: "center", height: "auto" }}
                    />
                    <h3 className={s.benefitTileTitle}>{tile.title}</h3>
                    <p className={s.benefitTileDescription}>{tile.description}</p>
                </div>
            ))}

            <div style={{ gridColumn: "span 3", display: "flex", justifyContent: "center", padding: "2rem" }}>
                <button className={s.benefitsButton}>
                    Zarejestruj się na warsztat
                </button>
            </div>
        </section>
    );
}