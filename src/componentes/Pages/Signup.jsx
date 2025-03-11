import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import Flex from "../Flex";

const Signup = () => {
  return (
    <>
      <section>
        <Container className={"max-w-menuContainer"}>
          <div className="">
            <Heading
              as={"H4"}
              text={"Sign up"}
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
          <div className="border-b pb-16">
            <Heading
              as={"H4"}
              text={"Your Personal Details"}
              className={
                "font-sans font-bold text-[39px]  pt-[55px] text-menuHover "
              }
            />

            <Flex className={"flex-row"}>
              <div className="w-[50%] pt-[50px]">
                <div>
                  <Heading
                    as="h3"
                    text="First Name"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                  />
                </div>
                <div className="pt-[25px]">
                  <Heading
                    as="h3"
                    text="Email address"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="email"
                    placeholder="company@domain.com"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                  />
                </div>
              </div>
              <div className="w-[50%] pt-[50px]">
                <div>
                  <Heading
                    as="h3"
                    text="Last Name"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                  />
                </div>
                <div className="pt-[25px]">
                  <Heading
                    as="h3"
                    text="Telephone"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="number"
                    placeholder="Your phone number"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                  />
                </div>
              </div>
            </Flex>
          </div>
          <div className="border-b pb-16">
            <Heading
              as={"H4"}
              text={"New Customer"}
              className={
                "font-sans font-bold text-[39px]  pt-[55px] text-menuHover "
              }
            />

            <Flex className={"flex-row"}>
              <div className="w-[50%] pt-[50px]">
                <div>
                  <Heading
                    as="h3"
                    text="Address 1"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="text"
                    placeholder="4279 Zboncak Port Suite 6212"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                  />
                </div>
                <div className="pt-[25px]">
                  <Heading
                    as="h3"
                    text="City"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="text"
                    placeholder="Your city"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                  />
                </div>
                <form
                  action=""
                  className="pt-[25px] w-1/2 py-4 text-base border-b-2 border-b-gray-200  "
                >
                  <Heading
                    as="h3"
                    text="Country"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />

                  <select
                    id="region"
                    name="region"
                    required
                    className="w-full text-sm focus:outline-none text-menuText"
                  >
                    <option value="">Please select</option>
                    <option value="Ban">Banglades</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="sa">South Africa</option>
                  </select>
                </form>
              </div>
              <div className="w-[50%] pt-[50px]">
                <div>
                  <Heading
                    as="h3"
                    text="Address 2"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="text"
                    placeholder="—"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                  />
                </div>
                <div className="pt-[25px]">
                  <Heading
                    as="h3"
                    text="Post Code"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />
                  <input
                    type="number"
                    placeholder="05228"
                    className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                  />
                </div>

                <form
                  action=""
                  className="pt-[25px] w-1/2 py-4 text-base border-b-2 border-b-gray-200  "
                >
                  <Heading
                    as="h3"
                    text="Region/State"
                    className="py-3 text-lg font-bold leading-10  font-dm"
                  />

                  <select
                    id="region"
                    name="region"
                    required
                    className="w-full text-sm focus:outline-none text-menuText"
                  >
                    <option value="">Please select </option>
                    <option value="ny">New York</option>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                    <option value="on">Ontario</option>
                  </select>
                </form>
              </div>
            </Flex>
            <div className="border-b pb-16">
              <Heading
                as={"H4"}
                text={"Your Personal Details"}
                className={
                  "font-sans font-bold text-[39px]  pt-[55px] text-menuHover "
                }
              />

              <Flex className={"flex-row"}>
                <div className="w-[50%] pt-[50px]">
                  <div>
                    <Heading
                      as="h3"
                      text="First Name"
                      className="py-3 text-lg font-bold leading-10  font-dm"
                    />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                    />
                  </div>
                  <div className="pt-[25px]">
                    <Heading
                      as="h3"
                      text="Email address"
                      className="py-3 text-lg font-bold leading-10  font-dm"
                    />
                    <input
                      type="email"
                      placeholder="company@domain.com"
                      className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                    />
                  </div>
                </div>
                <div className="w-[50%] pt-[50px]">
                  <div>
                    <Heading
                      as="h3"
                      text="Last Name"
                      className="py-3 text-lg font-bold leading-10  font-dm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                    />
                  </div>
                  <div className="pt-[25px]">
                    <Heading
                      as="h3"
                      text="Telephone"
                      className="py-3 text-lg font-bold leading-10  font-dm"
                    />
                    <input
                      type="number"
                      placeholder="Your phone number"
                      className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
                    />
                  </div>
                </div>
              </Flex>
            </div>
            <div className="border-b pb-16">
              <Heading
                as={"H4"}
                text={"Your Password"}
                className={
                  "font-sans font-bold text-[39px]  pt-[55px] text-menuHover "
                }
              />

              <Flex className={"flex-row"}>
                <div className="w-[50%] pt-[50px]">
                  <div>
                    <Heading
                      as="h3"
                      text="Password"
                      className="py-3 text-lg font-bold leading-10  font-dm"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                    />
                  </div>
                </div>
                <div className="w-[50%] pt-[50px]">
                  <div>
                    <Heading
                      as="h3"
                      text="Repeat Password"
                      className="py-3 text-lg font-bold leading-10  font-dm"
                    />
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 text-menuText"
                    />
                  </div>
                </div>
              </Flex>
            </div>

            <div>
              <Flex className="gap-x-[14px] pt-16">
                <input
                  type="checkbox"
                  id="toggle"
                  className="p-1 text-transparent bg-gray-400 border-b-4 border-b-gray-500 "
                />
                <Heading
                  as="h3"
                  text="I have read and agree to the Privacy Policy"
                  className="font-dm text-menuText "
                />
              </Flex>

              <Flex className="gap-x-[32px] py-7">
                <div>
                  <Heading
                    as="h3"
                    text="Subscribe Newsletter"
                    className="font-dm text-menuText "
                  />
                </div>
                <div className="flex gap-x-[14px]">
                  <Heading
                    as="h3"
                    text="Yes"
                    className="font-dm text-menuText "
                  />
                  <input
                    type="radio"
                    id="yes"
                    value="yes"
                    name="logic"
                    className="p-1 text-transparent bg-gray-400 border-b-4 border-b-gray-500 "
                  />
                </div>
                <div className="flex gap-x-[14px]">
                  <Heading
                    as="h3"
                    text="No"
                    className="font-dm text-menuText "
                  />
                  <input
                    type="radio"
                    id="no"
                    value="no"
                    name="logic"
                    className="p-1 text-transparent bg-black border-b-4 border-b-gray-500"
                  />
                </div>
              </Flex>
            </div>
            
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
        </Container>
      </section>
    </>
  );
};

export default Signup;
