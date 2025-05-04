import { createRootRoute, Outlet } from "@tanstack/react-router";
import LandingMenu from "../components/templates/landingMenu/LandingMenu";

export const Route = createRootRoute({
  component: () => (
    <>
      <LandingMenu />
      <Outlet />
    </>
  ),
});
