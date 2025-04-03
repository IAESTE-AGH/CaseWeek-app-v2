import { CaseWeekOverview, CaseWeekPros, WelcomeSection } from "../templates/sections";

export default function HomePage() {
    return (
        <>
            <WelcomeSection />
            <CaseWeekOverview />
            <CaseWeekPros />
        </>
    );
}