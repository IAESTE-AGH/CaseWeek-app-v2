import s from "./PartnersCompanies.module.scss";
import temporaryCompaniesLogo from "../../../assets/img/PSRP_logo.png";
import { PartnersPageProps } from "./PartnersCompanies.type";

const PartnersCompanies: React.FC<PartnersPageProps> = ({
  companies,
  title,
}) => {
  return (
    <section className={s.partnersSection}>
      <h1 className={s.title}>{title}</h1>
      <ul className={s.partnersGrid}>
        {companies.map((company) => (
          <li key={company.id} className={s.partner}>
            <div className={s.partnerWrapper}>
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={company.logoUrl} alt={company.name} />
              </a>
              {/*  <p className={s.partnerStatus}>{t("partners.honoraryStatus")}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PartnersCompanies;
