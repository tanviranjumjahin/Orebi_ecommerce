import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Footertext from '../Parts/Footertext'
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from '../Image';
import logo from '../../assets/logo.png'



const Footer = () => {
    return (
        <div className='bg-categoryBG pt-12'>
            <Container className={'max-w-menuContainer'}>
                <Flex>
                    <div className="w-[15%]">
                        <Footertext
                            FH={'Menu'}
                            POne={'Home'}
                            PTwo={'Shop'}
                            PThree={'About'}
                            PFour={'Contact'}
                            PFive={'Journal'}
                        />
                        <Flex className={'gap-x-6 pt-16 pb-[55px]'}>
                            <TiSocialFacebook size={20} />
                            <FaLinkedinIn size={20} />
                            <FaInstagram size={20} />
                        </Flex>
                    </div>
                    <div className="w-[15%]">
                        <Footertext
                            FH={'SHOP'}
                            POne={'Category 1'}
                            PTwo={' Category 2'}
                            PThree={'Category 3'}
                            PFour={'Category 4'}
                            PFive={'Category 5'}
                        />
                    </div>
                    <div className="w-[15%]">
                        <Footertext
                            FH={'HELP'}
                            POne={'Privacy Policy'}
                            PTwo={'Terms & Conditions'}
                            PThree={'Special E-shop'}
                            PFour={'Shipping'}
                            PFive={'Secure Payments'}
                        />
                    </div>
                    <div className="w-[20%]">
                        <Footertext
                            FH={'(052) 611-5711 company@domain.com'}
                            POne={'575 Crescent Ave. Quakertown, PA 18951'}
                        />
                    </div>
                    <div className="w-[35%] pl-[120px]">
                        <Image imgsrc={logo} className={'w-[80px] pb-48'} />
                        <Footertext
                            PSix={'2020 Orebi Minimal eCommerce Figma Template by Adveits'}
                        />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Footer

