import { MOCK_COMPANIES } from "../../mocks/companies";
import { PartnersCompanies } from "../templates/sections";

const CompaniesPage = () => {
    return (
        <PartnersCompanies companies={MOCK_COMPANIES} title="Firmy" />
    );
};

export default CompaniesPage;