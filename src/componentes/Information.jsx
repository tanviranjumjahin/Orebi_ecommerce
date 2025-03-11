import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";


const Information = () => {
  return (
    <>
      <div className="w-full py-[30px]">
        <Container className={'max-w-menuContainer'}>
          <Flex className={'justify-between items-center'}>
            <div className="w-[30%]">
              <Flex className={'items-center justify-center'}>
                <PiNumberTwoBold className='text-3xl' />
                <Heading as='h3' text='Two years warranty' className={'font-dm text-sm'} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={'gap-x-2 items-center justify-center'}>
                <FaTruck className='text-3xl' />
                <Heading as='h3' text='Free shipping' className={'font-dm text-sm'} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={'gap-x-2 items-center justify-center'}>
                <FaUndo className='text-3xl' />
                <Heading as='h3' text='Return policy in 30 days' className={'font-dm text-sm'} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Information
