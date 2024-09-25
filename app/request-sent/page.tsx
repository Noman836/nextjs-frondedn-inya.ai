import Tag from "@/components/Tag";
import React from "react";
import request from "../../public/assets/request/request.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <>
      <section className="container-fluid p-3">
        <main className="container  w-full pt-[120px] md:pt-[160px] lg:pt-[195px]">
          <div className="flex justify-center">
            <Tag className="" title="Demo" />
          </div>
          <h1 className="lg:w-2/3 mx-auto w-full text-[24px] leading-[25px] md:text-[40px]  lg:text-[48px] xl:text-[50px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-center">
            Ready to Experience Cloe?
          </h1>

          <p className="w-[100%] lg:w-[40%] mx-auto pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-primary text-center">
            Discover how Cleo can transform your cloud security and management
            strategy.
          </p>
        </main>
        <section className="container xl:flex xl:flex-row lg:flex lg:flex-col md:flex md:flex-col flex flex-col xl:gap-[89px] lg:gap-[89px] md:gap-[30px] gap-[30px] xl:pt-[57px] lg:pt-[57px] md:pt-[57px] mt-[30px]">
          <div className="xl:w-[40%] h-auto lg:w-[100%]  md:w-[100%] w-full">
            <form action="">
              <div>
                <label className="text-primary " htmlFor="">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter full name"
                  className="mt-[8px]placeholder:text-secondary mt-[8px] text-secondary rounded-[6px] bg-hoverBg px-[16px] py-[9px] border border-none "
                ></Input>
              </div>
              <div className="my-[24px]">
                <label className="text-primary " htmlFor="">
                Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="mt-[8px] text-secondary rounded-[6px] bg-hoverBg  px-[16px] py-[9px]  placeholder:text-secondary border border-none " 
                ></Input>
              </div>
              <div className="my-[24px] md:flex md:flex-col">
                <label className="text-primary " htmlFor="">
                  Message
                </label>
                <textarea className="bg-hoverBg mt-[8px] xl:w-[100%] md:w-[100%]  px-[16px] py-[9px] rounded-[6px]  w-full  lg:w-[100%] h-[119px] placeholder:text-secondary " name=""  id="" placeholder="Type Here...">

                </textarea>
              </div>
              <div className="mb-[32px]">
                <Button className="font-bold text-black bg-primary rounded-[6px] px-[36px] py-[12px]">Send</Button>
              </div>
            </form>
          </div>
          <div className="xl:w-[60%] h-auto lg:w-[100%] md:w-[100%] w-full md:flex md:justify-center lg:flex lg:justify-center">
            <Image src={request} alt="Request Image" width={686} height={414} />
          </div>
        </section>
      </section>
      <hr className="container lg:w-full md:w-full w-[80%] mt-[60px]  bg-boxBorderColor h-[1px] border-0" />
    </>
  );
};

export default page;
