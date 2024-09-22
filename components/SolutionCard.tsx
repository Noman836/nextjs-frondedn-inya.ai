import React from "react";
import Tag from "./Tag";

const SolutionCard = () => {
  return (
    <>
      <main className="container border border-boxBorderColor rounded-[12px] lg:px-[51px] lg:py-[52px] px-[21px] md:pt-[42px] md:px-[31px] pt-[32px]">
        <div className="flex flex-col">
          <Tag
            className="lg:w-[220px] md:w-[240px]  lg:h-[33px] flex items-center w-[200px] text-[12px] h-auto"
            title="Industry 1: Financial Services"
          />
          <div className="w-full flex justify-start">
            <h1 className=" text-[16px] leading-[25px] md:text-[30px]  lg:text-[32px] xl:text-[32px] pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[24px] md:leading-[50px] lg:leading-[60px] xl:leading-[64px] font-bold text-primary text-left">
              Secure Financial Transactions with AI Precision
            </h1>
          </div>
          <p className=" pt-[12px] md:pt-[14px] lg:pt-[16px] xl:pt-[16px] font-[400] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-[22px] md:leading-[23px] lg:leading-[24px] xl:leading-[24px] text-primary text-left">
            The financial sector demands the highest level of security to
            protect sensitive data and ensure compliance with stringent
            regulations. Cleo offers real-time threat detection, automated
            compliance checks, and predictive analysis to keep your financial
            operations secure.
          </p>
          <Tag className="lg:mt-[32px] md:mt-[30px] mt-[22px] rounded-[6px] lg:w-[363px] lg:h-[48px] w-full h-auto flex items-center px-[36px] py-[12px] font-[600] md:text-[16px] text-[12px] md:leading-[24px]" title="Learn More About Financial Solutions"/>
          <div className="lg:flex lg:gap-[100px]">
            <div className="">
                <h2 className="text-primary font-[600] text-[20px] leading-[30px] mb-[16px] mt-[32px]">Features:</h2>
                <ul className="ml-4">
                    <li className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]">Real- time Threat Detection</li>
                    <li className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]">Compliance Management</li>
                    <li className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]">Intelligent Alert Prioritization</li>
                </ul>
            </div>
            <div className="">
                <h2 className="text-primary font-[600] text-[20px] leading-[30px] mb-[16px] mt-[32px]">Benefits:</h2>
                <ul className="ml-4">
                    <li className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]">Ensure compliance with regulations such as GDPR and PCI-DSS</li>
                    <li className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]">Reduce risk of data breaches and fraud</li>
                    <li className="text-secondary text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-[24px] md:leading-[16px] lg:leading-[20px] xl:leading-[20px] font-[400] list-disc mb-[10px] md:mb-[12px] lg:mb-[14px] xl:mb-[8px]">Improve operational efficiency with automated responses</li>
                </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SolutionCard;
