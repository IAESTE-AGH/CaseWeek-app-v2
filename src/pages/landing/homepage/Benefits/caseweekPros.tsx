import tie_icon from "../../../../assets/icons/tie_icon.svg";
import hat_icon from "../../../../assets/icons/hat_icon.svg";
import book_icon from "../../../../assets/icons/book_icon.svg";
import people_add_icon from "../../../../assets/icons/people_add_icon.svg";
import atom_icon from "../../../../assets/icons/atom_icon.svg";
import people_icon from "../../../../assets/icons/people_icon.svg";

const TILES = [
    { icon: tie_icon, title: "Kontakt z pracodawcą", description: "Najlepsze firmy z polskiego i światowego rynku pracy w jednym miejscu." },
    { icon: hat_icon, title: "Praktyczna Wiedza", description: "Zastosowanie zdobytej wiedzy w rozwiązywaniu problemów." },
    { icon: book_icon, title: "Staże i Praktyki", description: "Możliwości rozwoju oferowane przez wiodące marki." },
    { icon: people_add_icon, title: "Umiejętności miękkie", description: "Rozwój osobisty pod okiem najlepszych specjalistów z branży." },
    { icon: atom_icon, title: "Innowacje", description: "Nowoczesne rozwiązania oraz najlepsze technologie." },
    { icon: people_icon, title: "Praca zespołowa", description: "Wspólne rozwiązywanie casów i wypracowywanie nowych rozwiązań." },
];

export function CaseWeekPros() {
    return (
        <section
            style={{
                background: "#262626",
                padding: "4rem",
                color: "#fff",
                lineHeight: 1.5,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "2rem",
                fontFamily: "Inter, sans-serif",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    letterSpacing: "0.27em",
                    gridColumn: "span 3",
                    margin: 0,
                    textTransform: "uppercase",
                }}
            >
                Co zyskujesz dzięki IAESTE CaseWeek?
            </h1>

            {TILES.map((tile, index) => (
                <div
                    key={index}
                    style={{
                        display: "grid",
                        gap: "1rem",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={tile.icon}
                        alt={tile.title}
                        style={{ justifySelf: "center", height: "auto" }}
                    />
                    <h3
                        style={{
                            margin: 0,
                            textTransform: "uppercase",
                            letterSpacing: "0.27em",
                            fontWeight: "bold",
                            fontSize: "1rem",
                        }}
                    >
                        {tile.title}
                    </h3>
                    <p
                        style={{
                            letterSpacing: "0.15em",
                            margin: 0,
                            fontSize: "0.95rem",
                            fontWeight: 400,
                            lineHeight: 1.7,
                        }}
                    >
                        {tile.description}
                    </p>
                </div>
            ))}

            <div
                style={{
                    gridColumn: "span 3",
                    display: "flex",
                    justifyContent: "center",
                    padding: "2rem",
                }}
            >
                <button
                    style={{
                        backgroundColor: "#DAB88B",
                        color: "black",
                        padding: "1rem 3rem",
                        borderRadius: "50px",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        fontFamily: "Inter, sans-serif",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c9a77a")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DAB88B")}
                >
                    Zarejestruj się na warsztat
                </button>
            </div>
        </section>
    );
}
