import { createFileRoute } from "@tanstack/react-router";
import WorkshopCard from "../../pages/landing/workshop/WorkshopCard";

export const Route = createFileRoute("/workshops/$workshopId")({
  component: Workshop,
});

function Workshop() {
  const { workshopId } = Route.useParams();
  return <WorkshopCard workshopId={workshopId} />;
}
