import React from "react";
import Badge from "./Badge";
import { FaHeart} from "react-icons/fa";
import Image from "./Image";
import Flex from "./Flex";
import { BsArrowRepeat } from "react-icons/bs";
import Heading from "./Heading";
import { Link } from "react-router";
import AddToCart from "./Parts/AddToCart";
import { useDispatch } from "react-redux";
import { increment } from "../slices/counterslice";



const Product = ({
  imgsrc,
  badgename,
  pName,
  pPrice,
  pColor,
  hoverOne,
  hoverTwo,
  hoverThree,
}) => {

  const dispatch = useDispatch();
  return (
    
      
        <div className="group">
          <div className="relative">
            <Link to={'./productdescription'}>
            <Badge badgeName={badgename} className={"absolute top-4 left-3"} />
            <Image imgsrc={imgsrc} imgalt={"Image"} />
            <div className="absolute p-4 bg-white invisible group-hover:visible  bottom-0 left-0 right-0 w-full  ">
              <Flex className={"justify-end items-center gap-x-3 pb-2"}>
                <Link to={"/"}>
                  <Heading
                    as={"h3"}
                    className={
                      "font-dm text-[16px]  hover:text-menuHover hover:font-bold text-menuText"
                    }
                    text={hoverOne}
                  />
                </Link>
                <FaHeart />
              </Flex>
              <Flex className={"justify-end items-center gap-x-3 pb-2"}>
                <Link to={"/"}>
                  <Heading
                    as={"h3"}
                    className={
                      "font-dm text-[16px]  hover:text-menuHover hover:font-bold text-menuText"
                    }
                    text={hoverTwo}
                  />
                </Link>
                <BsArrowRepeat />
              </Flex>
              <button onClick={() => dispatch(increment())}>
              <Flex className={"justify-end items-center gap-x-2"}>
                <Link to={"/"}>
                  <Heading 
                    as={"h3"}
                    className={
                      "font-dm text-[16px]  hover:text-menuHover hover:font-bold text-menuText ml-[153px]"
                    }
                    text={hoverThree}
                  />
                </Link>
              <AddToCart/>
              </Flex>
              </button>
            </div>
            </Link>
          </div>
          <div className="py-3">
            <Flex className={"justify-between"}>
              <Heading
                as={"h3"}
                text={pName}
                className={"text-menuHover font-dm font-bold text-[20px]"}
              />
              <Heading
                as={"h3"}
                text={pPrice}
                className={"text-menuText font-dm  text-[16px]  "}
              />
            </Flex>
            <Heading
              as={"h3"}
              text={pColor}
              className={"text-menuText  font-dm  text-[16px] mt-3 "}
            />
          </div>
        </div>
      
   
  );
};

export default Product;
