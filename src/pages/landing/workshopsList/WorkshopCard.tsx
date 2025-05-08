import { Link } from "@tanstack/react-router";
import timeAttackIcon from "../../../assets/img/timeAttackIcon.png";
import universityIcon from "../../../assets/img/universityIcon.png";
import alarmClockIcon from "../../../assets/img/alarmClockIcon.png";
import s from "./WorkshopsList.module.scss";
import { Workshop } from "@/types/workshop";


export default function WorkshopCard({ workshop, isSeparator = true }: {
    workshop: Workshop;
    isSeparator?: boolean;
}) {
    const formatDate = (isoString: string): string => {
        const date = new Date(isoString);
        return date.toLocaleString("pl-PL", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            // timeZone: "Europe/Warsaw", // jeśli chcesz lokalnie w Polsce
        });
    };

    return <div key={workshop.id} className={s.card}>
        <div className={s.displayCard}>
            <img src={workshop.company.logoUrl} alt="Workshop" className={s.image} />

            <text className={s.workshopTitle}>{workshop.title}</text>

            <text className={s.company}>{workshop.company.name}</text>

            <text className={s.description}>{workshop.shortDescription || workshop.longDescription}</text>

            <div className={s.details}>
                <div className={s.detailsLi}>
                    <div className={s.iconWrapper}>
                        <img src={universityIcon} />
                    </div>
                    <span className={s.iconText}>
                        {workshop.university.name}
                    </span>
                </div>
                <div className={s.detailsLi}>
                    <div className={s.iconWrapper}>
                        <img src={alarmClockIcon} />
                    </div>
                    <span className={s.iconText}>
                        {formatDate(workshop.startsAt)}
                    </span>
                </div>
                <div className={s.detailsLi}>
                    <div className={s.iconWrapper}>
                        <img src={timeAttackIcon} />
                    </div>
                    <span className={s.iconText}>
                        {workshop.durationMinutes} min.
                    </span>
                </div>
            </div>

            <Link
                to="/workshops/$workshopId"
                className={s.workshopLink}
                params={{ workshopId: workshop.id }}
            >
                Przejdź do szczegółów
            </Link>
        </div>

        {isSeparator && (
            <div className={s.separator}></div>
        )}
    </div>
}