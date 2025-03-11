import React from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaCaretDown,
  FaShoppingCart,
  FaTruck,
  FaUndo,
} from "react-icons/fa";
import Heading from "../Heading";
import Flex from "../Flex";

const Users = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className=" relative ">
      <OutsideClickHandler
        onOutsideClick={() => {
          setHidden(false);
        }}
      >
        <Flex>
          <FaUser
            className="ml-2 cursor-pointer"
            onClick={() => setHidden(!hidden)}
          />
          <FaCaretDown
            className="mr-8 cursor-pointer"
            onClick={() => setHidden(!hidden)}
          />
          {hidden && (
            <div className=" bg-white w-[230px] absolute -left-[100px] top-[45px] z-50">
              <ul className="font-dms text-[16px] text-center">
                <li className="flex flex-col">
                  <Link
                    to="/myaccount"
                    className={
                      "border border-BorderInfoColor py-4 font-dm text-[14px] font-regular w-full  hover:bg-menuHover hover:text-white hover:font-bold"
                    }
                  >
                    <button>
                      <Heading as={"P"} text={"My Account"} />
                    </button>
                  </Link>

                  <Link
                    to="/login"
                    className={
                      " border border-BorderInfoColor py-4 font-dm text-[14px] font-regular w-full hover:bg-menuHover hover:text-white hover:font-bold"
                    }
                  >
                    <button>
                      <Heading as={"P"} text={"Login"} />
                    </button>
                  </Link>


                  <Link
                    to="/signup"
                    className={
                      " border border-BorderInfoColor py-4 font-dm text-[14px] font-regular w-full hover:bg-menuHover hover:text-white hover:font-bold"
                    }
                  >
                    <button>
                      <Heading as={"P"} text={"Sign up"} />
                    </button>
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
export default Users;
