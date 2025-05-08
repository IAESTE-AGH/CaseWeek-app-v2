import s from "./WorkshopCard.module.scss";
import { WORKSHOPS } from "../../../page_data/workshops";
import { WORKSHOP_CARD_DATA } from "./WorkshopCard.const";
import { Workshop } from "../../../types/workshop";
// import ArrowFo rwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "../../../components/atoms/button/Button";

const WorkshopCard = ({ workshopId }: { workshopId: string }) => {
  const workshop = WORKSHOPS.find(
    (item) => item.id === workshopId
  ) as Workshop;

  const fieldsOfStudy = workshop.preferableFieldsOfStudy ? workshop?.preferableFieldsOfStudy
    ?.map((field) => field.name)
    .join(", ") : "Wszystkie kierunki studiów";

  // const skillsArray = ["Pierwsza ", "druga ", "trzecia ", "czwarta "];

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString("pl-PL", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Warsaw", // jeśli chcesz lokalnie w Polsce
    });
  };

  const resultArray = [
    workshop?.university.name,
    formatDate(workshop?.startsAt),
    `${workshop?.durationMinutes} min`,
    workshop?.address,
    "",
    workshop?.minYearOfStudy,
    workshop?.maxYearOfStudy,
    fieldsOfStudy,
  ];

  // const propositions = workshop?.propositions?.id;

  return (
    <main className={s.workshopContainer}>
      {workshop ? (
        <div className={s.workshopsWrapper}>
          <h1 className={s.workshopNameHeader}>{workshop.title}</h1>
          <h4 className={s.companyName}>{workshop.company.name}</h4>
          <section className={s.workshopSectionWrapper}>
            <article className={s.workshopWrapper}>
              <img
                className={s.companyPicture}
                src={workshop.company.logoUrl}
                alt={`${workshop.company.name} logo`}
              />

              <ul className={s.infoColumn}>
                {WORKSHOP_CARD_DATA.map((card, index) => (
                  <li key={card.detalName} className={s.workshopInfo}>
                    <div className={s.infoGrey}>
                      {card.icon}
                      <p>
                        {`${card.detalName} `}
                        <strong>{resultArray[index]}</strong>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className={s.workshopcDescriptionWrap}>
              <h4>Opis warsztatu</h4>
              <p className={s.description}>{workshop.longDescription}</p>
              {/* <div className={s.skillsWrap}>
                <h4 className={s.skillHeading}>Czego sie nauczysz</h4>
                <div className={s.skillList}>
                  {skillsArray.map((skill) => (
                    <div className={s.workshopSkill}>{skill}</div>
                  ))}
                </div>
              </div> */}
              <br />
              <h4>Opis firmy</h4>
              <p className={s.description}>{workshop.company.longDescription}</p>
              <div className={`${s.workshopSignUp} ${s.desktop}`}>
                <Button title="Zapisz się na warsztat" disabled />
                {/* <p className={s.registrationDate}>
                  Rejestracja trwa do: 'data'
                </p> */}
              </div>
            </article>
            {/* <div className={`${s.underline} ${s.desktop}`}></div> */}
          </section>
          <div className={`${s.workshopSignUp} ${s.mobile}`}>
            <Button title="Zapisz się" disabled />

            {/* <p className={s.registrationDate}>Rejestracja trwa do: 'data'</p> */}
            {/* <div className={`${s.underline} ${s.mobile}`}></div> */}
          </div>

          {/* <section className={s.otherWorkshopsWrap}>
            <h2>Mogą cię też zainteresować: </h2>
            <article className={s.otherWorkshopSection}>
              {propositions?.map((workshopPreview) => {
                const workshopPrev = WORKSHOPS_MOCKS.find(
                  (item) => item.id === workshopPreview
                );

                return workshopPrev ? (
                  <div className={s.workshopPreview} key={workshopPrev.id}>
                    <img src="" alt="" className={s.companyPicturePreview} />
                    <div className={s.workshopInfoPreview}>
                      <p
                        className={`${s.infoGrey} ${s.infoPreview}`}
                      >{`${workshopPrev.startsAt} ${workshopPrev.university.name}`}</p>
                      <h3 className={s.workshopTitlePreview}>
                        {workshopPrev.title}
                      </h3>
                      <h5 className={s.companyNamePreview}>
                        {workshopPrev.company.name}
                      </h5>
                      <div className={s.badgesWrap}>
                        <div className={s.badge}>krotki</div>
                        <div className={s.badge}>dluszczy badge</div>
                        <div className={s.badge}>krotki</div>
                        <div className={s.badge}>dluzszy badge</div>
                        <div className={s.badge}>krotki</div>
                      </div>
                      <div className={s.workshopActionBtn}>
                        <ArrowForwardIcon
                          sx={{ fontSize: 20 }}
                          className={s.arrowIcon}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <p>Nie znaleziono warsztatu</p>
                );
              })}
            </article>
          </section> */}
        </div>
      ) : (
        <p>Nie znaleziono warsztatu</p>
      )}
    </main>
  );
};

export default WorkshopCard;
