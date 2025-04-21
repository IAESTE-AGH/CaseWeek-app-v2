import { Overview, Benefits, Welcome } from "../templates/sections";

export default function HomePage() {
    return (
        <>
            <Welcome />
            <Overview />
            <Benefits/>
        </>
    );
}