import Background from "../../../../assets/img/welcome_bg.png";
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
                <h1 className={s.title}>Industry Meets Academic</h1>
                <h3 className={s.subtitle}>
                    Największy cykl warsztatów inżynierskich w Polsce
                </h3>
            </div>
        </section>
    );
}