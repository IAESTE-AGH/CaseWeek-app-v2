import { createFileRoute } from "@tanstack/react-router";
import WorkshopsList from "../../pages/landing/workshopsList/WorkshopsList";

export const Route = createFileRoute("/workshops/")({
  component: Workshops,
});

function Workshops() {
  return <WorkshopsList />;
}
