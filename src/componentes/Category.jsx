import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import Flex from "./Flex";
import Heading from "./Heading";

const Category = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className=" relative ">
      <OutsideClickHandler
        onOutsideClick={() => {
          setHidden(false);
        }}
      >
        <Flex>
          <HiMenuAlt2
            className="cursor-pointer"
            onClick={() => setHidden(!hidden)}
          />
          <div onClick={() => setHidden(!hidden)}>
            <Heading
              as={"h3"}
              text={"Shop by Category"}
              className="font-sans  text-menuHover text-[14px] cursor-pointer relative"
            />
          </div>
          {hidden && (
            <div className="bg-menuHover p-4 w-[230px] absolute left-[0px] top-[30px] z-50">
              <ul className="font-dms text-[16px] text-TextColor">
                <li>
                  <Link>
                    <Heading
                      as={"P"}
                      text={"Accesories"}
                      className={
                        "py-2 border-b border-gray-400 hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      }
                    />
                  </Link>
                  <Link>
                    <Heading
                      as={"P"}
                      text={"Furniture"}
                      className={
                        "py-2 border-b border-gray-400 hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      }
                    />
                  </Link>
                  <Link>
                    <Heading
                      as={"P"}
                      text={"Electronics"}
                      className={
                        "py-2 border-b border-gray-400 hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      }
                    />
                  </Link>
                  <Link>
                    <Heading
                      as={"P"}
                      text={"Clothes"}
                      className={
                        "py-2 border-b border-gray-400 hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      }
                    />
                  </Link>
                  <Link>
                    <Heading
                      as={"P"}
                      text={"Bags"}
                      className={
                        "py-2 border-b border-gray-400 hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      }
                    />
                  </Link>
                  <Link>
                    <Heading
                      as={"P"}
                      text={"Home appliances"}
                      className={
                        "py-2 border-b border-gray-400 hover:font-bold hover:px-5 duration-300 font-dm text-white text-[14px] font-regular"
                      }
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Flex>
      </OutsideClickHandler>
    </div>
  );
};
export default Category;
