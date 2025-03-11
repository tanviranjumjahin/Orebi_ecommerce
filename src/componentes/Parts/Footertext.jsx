import React from 'react'
import Heading from '../Heading'

const Footertext = ({ FH, POne, PTwo, PThree, PFour, PFive, PSix }) => {
    return (
        <>
            <Heading as={'H1'} text={FH} className="font-bold font-dm text-[16px] pb-[15px]" />
            <Heading as={'p'} text={POne} className=" font-dm text-[14px]  py-[5px] text-FooterBg" />
            <Heading as={'p'} text={PTwo} className=" font-dm text-[14px]  py-[5px] text-FooterBg" />
            <Heading as={'p'} text={PThree} className=" font-dm text-[14px]  py-[5px] text-FooterBg" />
            <Heading as={'p'} text={PFour} className=" font-dm text-[14px] py-[5px] text-FooterBg" />
            <Heading as={'p'} text={PFive} className=" font-dm text-[14px]  py-[5px] text-FooterBg" />
            <Heading as={'p'} text={PSix} className=" font-dm text-[12px]  py-[5px] text-FooterBg" />
        </>
    )
}

export default Footertext

