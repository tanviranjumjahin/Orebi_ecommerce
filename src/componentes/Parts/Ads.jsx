import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import AdOne from '../../assets/AdOne.jpg'
import AdTwo from '../../assets/AdTwo.png'
import AdThree from '../../assets/AdThree.jpg'

const Ads = () => {
    return (
        <>
            <div className="w-full pt-[170px] pb-[70px]">
                <Container className={'max-w-menuContainer'}>
                    <Flex className={'justify-between'}>
                        <div className="w-[49%]">
                            <img src={AdOne} alt={"AdOne"} />
                        </div>
                        <div className="w-[49%]">
                            <img src={AdTwo} alt={"AdTwo"} />
                            <img src={AdThree} alt={"AdThree"} className={'mt-8'} />
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Ads
