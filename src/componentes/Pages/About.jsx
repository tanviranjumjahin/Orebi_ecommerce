import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import About_One from "/src/assets/About_One.png";
import About_Two from "../../assets/About_Two.png";
import Image from "../Image";
const About = () => {
  return (
    <>
      <section>
        <Container className={"max-w-menuContainer"}>
          <Heading
            as={"H4"}
            text={"About"}
            className={
              "font-sans font-bold text-[49px] pt-[200px]  text-menuHover "
            }
          />
          <Breadcrumb />
          <Flex className={"justify-evenly pt-[135px]"}>
            <div className="w-[45%]">
              <Image imgsrc={About_One} />
            </div>
            <div className="w-[45%]">
              <Image imgsrc={About_Two} />
            </div>
          </Flex>

          <Heading
            as={"p"}
            text={
              "Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
            }
            className={
              "font-dm text-[30px] font-regular text-menuHover pt-[125px]"
            }
          />
          <Flex className={"justify-between pt-[50px] pb-[135px]"}>
            <div className="w-[32%]">
              <Heading
                as={"H4"}
                text={"Our Vision"}
                className={"font-dm text-[25px] font-bold text-menuHover "}
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
                }
                className={
                  "font-dm text-[13px] font-regular text-menuText leading-[25px]"
                }
              />
            </div>
            <div className="w-[32%]">
              <Heading
                as={"H4"}
                text={"Our Story"}
                className={"font-dm text-[25px] font-bold text-menuHover "}
              />
              <Heading
                as={"p"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
                }
                className={
                  "font-dm text-[13px] font-regular text-menuText leading-[25px] "
                }
              />
            </div>
            <div className="w-[32%]">
              <Heading
                as={"H1"}
                text={"Our Brands"}
                className={"font-dm text-[25px] font-bold text-menuHover"}
              />
              <Heading
                as={"H1"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                }
                className={
                  "font-dm text-[13px] font-regular text-menuText leading-[25px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default About;
