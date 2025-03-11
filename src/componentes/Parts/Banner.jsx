import React from "react";
import Container from "../Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Banner = () => {
    var settings = {
      dots: true,
      arrows:false,
      infinite: true,
      autoplay:true,
      speed: 3000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      
  };
  return (
    <>
      <div className="bg-BannerBG">
        <Slider {...settings}>
          <Container className={"max-w-menuContainer"}>
            <div className="bg-bannerimg w-full py-[280px] bg-no-repeat bg-cover bg-center"></div>
          </Container>
          <Container className={"max-w-menuContainer"}>
            <div className="bg-bannerimg w-full py-[280px] bg-no-repeat bg-cover bg-center"></div>
          </Container>
          <Container className={"max-w-menuContainer"}>
            <div className="bg-bannerimg w-full py-[280px] bg-no-repeat bg-cover bg-center"></div>
          </Container>
          <Container className={"max-w-menuContainer"}>
            <div className="bg-bannerimg w-full py-[280px] bg-no-repeat bg-cover bg-center"></div>
          </Container>
          <Container className={"max-w-menuContainer"}>
            <div className="bg-bannerimg w-full py-[280px] bg-no-repeat bg-cover bg-center"></div>
          </Container>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
