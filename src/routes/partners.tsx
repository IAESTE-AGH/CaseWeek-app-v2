import { createFileRoute } from "@tanstack/react-router";
import PartnersCompanies from "../pages/landing/partnersCompanies/PartnersCompanies";
import { MOCK_COMPANIES } from "../mocks/companies";

export const Route = createFileRoute("/partners")({
  component: Partners,
});

function Partners() {
  return <PartnersCompanies title="Partnerzy" companies={MOCK_COMPANIES} />;
}
