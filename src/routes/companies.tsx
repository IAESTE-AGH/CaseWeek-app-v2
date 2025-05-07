import { createFileRoute } from "@tanstack/react-router";
import PartnersCompanies from "../pages/landing/partnersCompanies/PartnersCompanies";
import { MOCK_COMPANIES } from "../page_data/companies";

export const Route = createFileRoute("/companies")({
  component: Companies,
});

function Companies() {
  return <PartnersCompanies title="Firmy" companies={MOCK_COMPANIES} />;
}
