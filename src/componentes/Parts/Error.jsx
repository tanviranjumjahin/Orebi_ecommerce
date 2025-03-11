import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import { FaSearch } from "react-icons/fa";
import { Link,Navigate } from 'react-router-dom';


const Error = () => {
  return (
    <Container className={'max-w-menuContainer'}>
      <Heading
        as="h3"
        text="4O4"
        className="pt-32 font-bold text-8xl md:text-[200px] font-dm"
      />
      <Heading
        as="h3"
        text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"
        className="pt-12 xl:pr-[820px] text-xs text-menuText md:text-base font-dm"
      />
      <div className="relative w-1/2 border-2 border-gray-200 rounded my-14">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full py-4 pl-4 pr-5 rounded-lg"
        />
        <button>
          <FaSearch className="absolute text-2xl top-4 right-2" />
        </button>
      </div>
      <div className="pb-24">
        <Link to="/">
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-auto  block ">
            <Heading
              as="h3"
              text="Back to Home"
              className="px-12 py-5 text-base font-bold font-dm"
            />
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
