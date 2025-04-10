import { MOCK_COMPANIES } from "../../mocks/companies";
import { PartnersCompanies } from "../templates/sections";

const PartnersPage = () => {
    return (
        <PartnersCompanies companies={MOCK_COMPANIES} title="Partnerzy" />
    );
};

export default PartnersPage;