import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router"
import LandingMenu from "../components/templates/landingMenu/LandingMenu"
import AdminPanelMenu from "../components/templates/AdminPanelMenu/AdminPanelMenu"
import Footer from "../components/templates/footer/Footer"

export const Route = createRootRoute({
  component: () => {
    const { state } = useRouter()
    const pathname = state.location.pathname

    const isAdmin = pathname.startsWith("/admin")

    return (
      <>
        {isAdmin ? <AdminPanelMenu /> : <LandingMenu />}
        <Outlet />
        {!isAdmin && <Footer />}
      </>
    )
  },
})
