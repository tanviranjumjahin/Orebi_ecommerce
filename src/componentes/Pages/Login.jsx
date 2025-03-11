import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import Flex from "../Flex";

const Login = () => {
  return (
    <>
      <section>
        <Container className="max-w-menuContainer">
          <div className="border-b pb-18">
            <Heading
              as={"H4"}
              text={"Login"}
              className={
                "font-sans font-bold text-[49px] pt-[130px]  text-menuHover "
              }
            />
            <Breadcrumb />
            <Heading
              as={"p"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
              }
              className={
                "font-dm text-[16px]  text-menuText leading-[30px] w-[644px] pt-[122px] pb-[68px]"
              }
            />
          </div>
          <div className="border-b pb-14">
            <Heading
              as={"H4"}
              text={"Returning Customer"}
              className={
                "font-sans font-bold text-[39px]  pt-[55px] text-menuHover "
              }
            />

            <Flex className={"flex-row"}>
              <div className="w-[50%]">
                <Heading
                  as="h3"
                  text="Email address"
                  className="py-3 text-lg font-bold leading-10  font-dm"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                />
              </div>
              <div className="w-[50%]">
                <Heading
                  as="h3"
                  text="Password"
                  className="py-3 text-lg font-bold leading-10  font-dm"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                />
              </div>
            </Flex>
            <div className="pt-[30px]">
              <button className="border-[1px] border-black bg-black text-white hover:bg-transparent hover:text-black  duration-300 w-auto block">
                <Heading
                  as="h3"
                  text="Log in"
                  className="px-[75px] py-[15px] text-base font-bold font-dm "
                />
              </button>
            </div>
          </div>
          <Heading
            as={"H4"}
            text={"New Customer"}
            className={
              "font-sans font-bold text-[39px]  pt-[55px] text-menuHover "
            }
          />

          <div className="pb-[135px]">
            <Heading
              as={"p"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
              }
              className={
                "font-dm text-[16px]  text-menuText leading-[30px] w-[644px] pt-[50px] pb-[50px]"
              }
            />
            <button className="border-[1px] border-black bg-black text-white hover:bg-transparent hover:text-black  duration-300 w-auto block ">
              <Heading
                as="h3"
                text="Continue"
                className="px-[75px] py-[15px] text-base font-bold font-dm"
              />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Login;
