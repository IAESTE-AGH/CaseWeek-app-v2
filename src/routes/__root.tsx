import { createRootRoute, Outlet } from "@tanstack/react-router";
import LandingMenu from "../components/templates/landingMenu/LandingMenu";
import Footer from "../components/templates/footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <LandingMenu />
      <Outlet />
      <Footer />
    </>
  ),
});
