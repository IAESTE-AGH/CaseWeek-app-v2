import Background from "../../../../assets/img/welcome_bg.png";


export function WelcomeSection() {
    const navbarHeight = document.getElementById("navbar")?.clientHeight || 0;
    const sectionHeight = `calc(100vh - ${navbarHeight}px)`;

    return (
        <section
            style={{
                height: sectionHeight,
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(0deg, rgba(38, 38, 38, 0.9) 5%, rgba(0, 0, 0, 0) 80%)",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "64px",
                    boxSizing: "border-box",
                }}
            >
                <h1
                    style={{
                        color: "#DAB88B",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        letterSpacing: "0.27em",
                        marginBottom: "16px",
                        fontFamily: "League Spartan, sans-serif",
                        textAlign: "center",
                    }}
                >
                    Industry Meets Academic
                </h1>
                <h3
                    style={{
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                        letterSpacing: "0.27em",
                        fontFamily: "League Spartan, sans-serif",
                        textAlign: "center",
                        marginBottom: "32px",
                    }}
                >
                    Największy cykl warsztatów inżynierskich w Polsce
                </h3>
            </div>
        </section>
    );
}