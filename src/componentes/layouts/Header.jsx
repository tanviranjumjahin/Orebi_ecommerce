import React from 'react'
import logo from '../../assets/logo.png'
import Menu from '../Menu'
import Flex from '../Flex'
import Container from '../Container'
import Image from '../Image'
import { Link } from "react-router";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Heading from '../Heading'
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";
import Category from '../Category'
import Users from '../Parts/Users'
import Cart from '../Parts/CartIcon'




const Header = () => {
    return (
        <>
            <div className='w-full py-[30px] '>
                <Container className={"max-w-menuContainer"}>
                    <Flex className={"items-center"}>
                        <div className="w-logoW">
                            <Link to='/'>
                                <Image imgsrc={logo} />
                            </Link>
                        </div>
                        <div className="w-menuW">
                            <Flex className={"justify-center gap-x-6 "}>
                                <Menu className={'flex'}>
                                    <Link to='/'> <li className={'font-dm text-sm text-menuText hover:font-bold hover:text-menuHover px-5 '}>Home</li></Link>
                                    <Link to='/shop'> <li className={'font-dm text-sm text-menuText hover:font-bold hover:text-menuHover px-5 '}>Shop</li></Link>
                                    <Link to='/about'> <li className={'font-dm text-sm text-menuText hover:font-bold hover:text-menuHover px-5 '}>About</li></Link>
                                    <Link to='/contacts'> <li className={'font-dm text-sm text-menuText hover:font-bold hover:text-menuHover px-5 '}>Contacts</li></Link>
                                  
                                </Menu>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>

            {/* category part start  */}
            <div className="w-full bg-categoryBG py-[15px]  border-borderBG border">
                <Container className={'max-w-menuContainer'}>
                    <Flex className={"items-center justify-between"}>
                        <div className="w-[20%]">
                            <Flex className={'gap-x-2'}>
                               <Category/>
                            </Flex>
                        </div>
                        <div className="w-[50%] relative">
                            <input type="text" className='bg-white p-4 rounded-lg w-full' placeholder='Search Products' />
                            <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2' />
                        </div>
                        <div className="w-[20%]">
                            <Flex>
                               <Users/>
                                <Cart />
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* category part end  */}

        </>
    )
}

export default Header
