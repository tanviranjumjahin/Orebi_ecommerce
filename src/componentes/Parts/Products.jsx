import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import productOne from '../../assets/ProductOne.jpg'
import productTwo from '../../assets/ProductTwo.png'
import productThree from '../../assets/ProductThree.png'
import productFour from '../../assets/ProductFour.png'
import productFive from '../../assets/ProductFive.png'
import productSix from '../../assets/ProductSix.png'
import productSeven from '../../assets/ProductSeven.jpg'
import productEight from '../../assets/ProductEight.jpg'
import productNine from '../../assets/ProductNine.jpg'
import productTen from '../../assets/ProductTen.png'
import productEleven from '../../assets/ProductEleven.png'
import productTwelve from '../../assets/ProductTwelve.png'
import AdFour from '../../assets/AdFour.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'
import Product from '../Product';
import Flex from '../Flex'
import Image from '../Image'


const Products = () => {

    var settingss = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>

            {/* Product Part Start */}
            <div className="py-20">
                <Container className={'max-w-menuContainer'}>
                    <Heading as={"h1"} className={"font-dm capitalize text-[39px] pb-10 leading-9 font-bold"} text={"new arrival"} />
                    <Slider {...settingss}>
                        <Product
                            badgename={'New'}
                            imgsrc={productOne}
                            hoverOne={'Add to Wish List'}
                            hoverTwo={'Compare'}
                            hoverThree={'Add to Cart'}
                            pName={'Basic Crew Neck Tee'}
                            pPrice={'$44.00'}
                            pColor={'Black'}
                        />
                        <Product
                            badgename={'New'}
                            imgsrc={productTwo}
                            hoverOne={'Add to Wish List'}
                            hoverTwo={'Compare'}
                            hoverThree={'Add to Cart'}
                            pName={'Basic Crew Neck Tee'}
                            pPrice={'$44.00'}
                            pColor={'Black'}
                        />
                        <Product
                            badgename={'New'}
                            imgsrc={productThree}
                            hoverOne={'Add to Wish List'}
                            hoverTwo={'Compare'}
                            hoverThree={'Add to Cart'}
                            pName={'Basic Crew Neck Tee'}
                            pPrice={'$44.00'}
                            pColor={'Black'}
                        />
                        <Product
                            badgename={'New'}
                            imgsrc={productFour}
                            hoverOne={'Add to Wish List'}
                            hoverTwo={'Compare'}
                            hoverThree={'Add to Cart'}
                            pName={'Basic Crew Neck Tee'}
                            pPrice={'$44.00'}
                            pColor={'Black'}
                        />
                    </Slider>
                </Container>
            </div>
            {/* Product Part End */}




            {/* bestsellers Part Start */}
            <div className="py-20">
                <Container className={'max-w-menuContainer'}>
                    <Heading as={"h1"} className={"font-dm capitalize text-[39px] pb-10 leading-9 font-bold"} text={"Our Bestsellers"} />

                    <Flex className={'justify-between'}>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productFive}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productSix}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productSeven}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productEight}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* bestsellers Part End */}




            {/* Ad Part Start */}
            <Container className={'max-w-menuContainer'}>
                <Image imgsrc={AdFour} className="w-full py-[120px] bg-no-repeat bg-cover bg-center" />
            </Container>
            {/* Ad Part End */}




            {/* special Part Start */}
            <div className="py-20">
                <Container className={'max-w-menuContainer'}>
                    <Heading as={"h1"} className={"font-dm capitalize text-[39px] pb-10 leading-9 font-bold"} text={"Special Offers"} />

                    <Flex className={'justify-between'}>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productNine}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productTen}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productEleven}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="w-[24%]">
                            <Product
                                badgename={'New'}
                                imgsrc={productTwelve}
                                hoverOne={'Add to Wish List'}
                                hoverTwo={'Compare'}
                                hoverThree={'Add to Cart'}
                                pName={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* special Part End */}

        </>
    )
}

export default Products
