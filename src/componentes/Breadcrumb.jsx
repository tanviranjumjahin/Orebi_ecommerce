import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const Breadcrumb = ({breadcrumbtext}) => {
  return (
    <>
    <div className="font-bold font-dm text-[20px] text-menuHover">{breadcrumbtext}</div>
    <div className="flex items-center mb-5 capitalize font-bold font-dm text-[16px] text-menuText">
        <span >Home</span><MdKeyboardArrowRight />
        <span>{window.location.pathname.split("/")[1]}</span>
    </div>
    </>
  )
}

export default Breadcrumb