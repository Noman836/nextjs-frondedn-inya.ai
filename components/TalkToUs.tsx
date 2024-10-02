import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import world from "../public/assets/Icon.svg";
const TalkToUs = () => {
  return (
    <>
      <main className="border  mt-[30px]  lg:py-[86px] p-[20px] lg:px-[80px]   xl:py-[86px]  xl:px-[80px] relative xl:flex xl:gap-[305px] lg:gap-[305px] lg:flex lg:flex-row flex flex-col items-center border-boxBorderColor rounded-[12px]">
        <div className="w-[184px]">
          <div className="flex justify-center pb-[16px] flex-col text-primary">
            <Button className="w-[112px] mx-auto h-[33px] hover:bg-boxbgColor text-[14px]  mb-[24px] mt-[51px] font-[400] text-secondary bg-boxbgColor border border-boxBorderColor  rounded-[30px]">
              Contact Us
            </Button>
            <h1 className="text-primary pb-[24px] font-[700] text-[40px] leading-[50px]">
              Talk to us
            </h1>
            <div className="flex gap-1">
              <Image src={world} alt="Contact Us Image" className=""></Image>
              <h6 className="text-secondary">contact@indya.ai</h6>
            </div>
          </div>
        </div>
        <div className="xl:w-[372px] lg:w-[372px] w-full ">
          <p className="text-secondary pb-[32px] w-full font-[400] text-[16px] leading-[24px]">
            Brief invitation for users to reach out with questions or feedback.
          </p>
          <button className="xl:w-[158px] lg:w-[158px] w-full h-[48px] px-[36px] py-[12px] text-[16px] font-[600] leading-[24px] text-black bg-primary hover:bg-secondary rounded-[6px]">
            Get Started
          </button>
        </div>
      </main>
    </>
  );
};

export default TalkToUs;
