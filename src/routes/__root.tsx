import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import LandingMenu from "../components/templates/landingMenu/LandingMenu";

export const Route = createRootRoute({
  component: () => (
    <>
      <LandingMenu />
      <Outlet />
    </>
  ),
});
