import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"


const Rootlayouts = () => {
  return (

    <>
      <Header />
      <Outlet />
      <Footer/>

    </>

  )
}

export default Rootlayouts