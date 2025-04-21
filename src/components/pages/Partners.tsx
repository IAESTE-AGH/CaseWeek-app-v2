import { MOCK_COMPANIES } from "../../mocks/companies";
import { PartnersCompanies } from "../templates/sections";
import { t } from "../../i18n/i18n";

const PartnersPage = () => {
    return (
        <PartnersCompanies companies={MOCK_COMPANIES} title={t("partners.Partners")} />
    );
};

export default PartnersPage;