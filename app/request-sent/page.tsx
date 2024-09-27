import Tag from "@/components/Tag";
import React from "react";
import request from "../../public/assets/request/request.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <section className="lg:w-[100%] flex justify-center items-center flex-col lg:p-0 md:p-0 p-3">
        <main className="md:pt-[160px] lg:pt-[100px] pt-[80px]">
          <div className="flex justify-center">
            <Tag className="" title="Demo" />
          </div>
          <h1 className="md:w-[618px] lg:w-[618px] mx-auto w-full text-[24px] leading-[25px] md:text-[40px] lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
            Ready to Experience Cloe?
          </h1>

          <p className="md:w-[455px] text-secondary lg:w-[455px] mx-auto pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px text-center">
            Discover how Cleo can transform your cloud security and management
            strategy.
          </p>
        </main>

        {/* Apply fixed padding/margin of 284px for screens larger than md */}
        <section className="lg:w-[70%] md:flex md:flex-col lg:gap-[89px] sm:flex sm:flex-col lg:flex lg:flex-row lg:justify-between flex-col flex lg:pt-0 gap-[30px] mt-[57px] ">
          <div className=" w-full">
            <form>
              <div>
                <label className="text-primary" htmlFor="">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter full name"
                  className="mt-[8px] placeholder:text-secondary text-secondary rounded-[6px] bg-hoverBg px-[16px] py-[9px] border-none"
                />
              </div>
              <div className="my-[24px]">
                <label className="text-primary" htmlFor="">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="mt-[8px] text-secondary rounded-[6px] bg-hoverBg px-[16px] py-[9px] placeholder:text-secondary border-none"
                />
              </div>
              <div className="my-[24px]">
                <label className="text-primary" htmlFor="">
                  Message
                </label>
                <textarea
                  className="bg-hoverBg mt-[8px] xl:w-full md:w-full px-[16px] py-[9px] rounded-[6px] h-[119px] placeholder:text-secondary w-full"
                  placeholder="Type Here..."
                />
              </div>
              <div className="mb-[32px]">
                <Button className="font-bold text-black bg-primary hover:bg-white rounded-[6px] px-[36px] py-[12px]">
                  Send
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:h-[414px] w-full flex justify-end lg:mb-0 mb-[60px]">
            <Image src={request} alt="Request Image" className="object-contain" />
          </div>
        </section>
      </section>
      <hr className="mx-auto w-[70%]  lg:mt-[60px]  bg-boxBorderColor h-[1px] border-0" />
    </>
  );
};

export default page;
