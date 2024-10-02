import Image from "next/image";
import '../app/style/Paid.css'
import React from "react";
import Logo from "../public/assets/Logo.png";
import { Button } from "./ui/button";
const Paid = () => {
  return (
    <>
      <main className="paid-bg border  py-[80px] relative flex flex-col items-center border-boxBorderColor rounded-[12px]">
        <Button className="w-[79px] absolute left-[18px] top-[18px]  lg:left-[48px] lg:top-[48px] h-[46px] text-[20px] leading-[24px] font-[600] bg-primary text-black hover:bg-secondary rounded-[6px]">Paid</Button>
        <div>
            <div className="mx-auto flex justify-center">
          <Image src={Logo} alt="Contact Us Image" className=""></Image>
            </div>
          <h1 className="xl:w-[889px] lg:w-[888px] w-full mx-auto text-center text-primary sm:text-[40px] text-[22px] leading-[30px] px-[10px] pt-[48px] sm:leading-[50px] font-[700]">Indya AI: Revolutionising Cloud Security with AI</h1>
          <p className="xl:w-[698px] lg:w-[698px] w-full mx-auto text-center text-secondary text-[10px] leading-[15px]  sm:text-[16px] sm:leading-[24px] font-[400] pt-[16px] px-[20px]">At Indya AI, we leverage cutting-edge AI and automation to simplify cloud security management, making it accessible and efficient for businesses of all sizes. </p>
        </div>
      </main>
    </>
  );
};

export default Paid;
