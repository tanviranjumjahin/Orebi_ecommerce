import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";

const Contacts = () => {
  return (
    <>
      <section>
        <Container className={"max-w-menuContainer"}>
          {/* breadcrumb part  */}
          <Heading
            as={"H4"}
            text={"Contacts"}
            className={
              "font-sans font-bold text-[49px] pt-[200px]  text-menuHover "
            }
          />
          <Breadcrumb />
          {/* breadcrumb part  */}
          {/* fill form part  */}
          <Heading
            as={"H4"}
            text={"Fill up a Form"}
            className={
              "font-sans font-bold text-[39px] pt-[130px]  text-menuHover "
            }
          />
          {/* fill form part  */}
          {/* form details part  */}
          <div className="w-full mt-6">
            <Heading
              as="h3"
              text="Name"
              className="py-3 text-lg font-bold leading-10  font-dm"
            />
            <input
              type="text"
              placeholder="Your name here"
              className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="w-full mt-6">
            <Heading
              as="h3"
              text="Email"
              className="py-3 text-lg font-bold leading-10  font-dm"
            />
            <input
              type="text"
              placeholder="Your email here"
              className="w-1/2 py-4 text-base border-b-2 border-b-gray-200  text-menuText"
            />
          </div>
          <div className="w-full mt-6">
            <Heading
              as="h3"
              text="Message"
              className="py-3 text-lg font-bold leading-10  font-dm"
            />
            <input
              type="text"
              placeholder="Your message here"
              className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          {/* form details part  */}
          {/* button part start  */}
          <div className="pt-[30px]">
            <button className="border-[1px] border-black bg-black text-white hover:bg-transparent hover:text-black  duration-300 w-auto block">
              <Heading
                as="h3"
                text="Post"
                className="px-[75px] py-[15px] text-base font-bold  font-dm"
              />
            </button>
          </div>
          {/* button part end  */}
          {/* google map section  */}
          <div className="w-full h-[500px] my-36">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1577200971633!2d90.3800082259169!3d23.7417544673211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1735131203190!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* google map section  */}
        </Container>
      </section>
    </>
  );
};

export default Contacts;
