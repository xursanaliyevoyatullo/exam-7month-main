import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import BreadCrumbs from "../components/BreadCrumbs"

function MainLayout() {
  return (
    <>
      <Navbar />
      <BreadCrumbs />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout