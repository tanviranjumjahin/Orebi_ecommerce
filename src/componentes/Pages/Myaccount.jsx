import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Breadcrumb from "../Breadcrumb";

const Myaccount = () => {
  return (
    <>
      <section>
        <Container className={'max-w-menuContainer'}>
          <div >
            <Heading
              as={"H4"}
              text={"My account"}
              className={
                "font-sans font-bold text-[49px] pt-[130px]  text-menuHover "
              }
            />
            <Breadcrumb />
            <Flex className={"justify-between gap-x-5"}>
              <div className="w-[234px]">
                <ul>
                  <li className="font-dm font-bold text-[16px] text-menuHover border-b py-5 border-b-gray-300">
                    Dashboard
                  </li>
                  <li className="font-dm font-regular text-[16px] text-menuHover border-b py-5 border-b-gray-300">
                    Donwloads
                  </li>
                  <li className="font-dm font-regular text-[16px] text-menuHover border-b py-5 border-b-gray-300">
                    Addresses
                  </li>
                  <li className="font-dm font-regular text-[16px] text-menuHover border-b py-5 border-b-gray-300">
                    Account details
                  </li>
                  <li className="font-dm font-regular text-[16px] text-menuHover py-5 pb-[130px] ">
                    Logout
                  </li>
                </ul>
              </div>
              <div className="lg:w-[918px]">
                <Heading
                  as={"p"}
                  text={"Hello admin (not admin? Log out)"}
                  className="font-dm font-regular text-[16px] text-navColor pb-10"
                />
                <Heading
                  as={"p"}
                  text={
                    "From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details. "
                  }
                  className="pr-[100px] lg:pr-0 font-dm font-regular text-[16px] text-navColor"
                />
              </div>
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Myaccount;
